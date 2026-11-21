#!/usr/bin/env python3
"""Deterministic 3D SDF Pastel-Clay Renderer for Spatial Prepositions & Directions.

Produces razor-sharp, geometrically accurate 256x256 WebP diagrams matching the
soft matte 3D clay toy aesthetic on pure white studio background (#FFFFFF).
"""

from __future__ import annotations

import argparse
import math
import time
from pathlib import Path
from typing import Callable

import numpy as np
from PIL import Image

WORKSPACE = Path(__file__).resolve().parent.parent
OUTPUT_DIR = WORKSPACE / "images" / "words"

# Soft pastel matte clay sRGB-linear palette
COL_ORANGE = np.array([1.00, 0.42, 0.19], dtype=np.float32)
COL_ORANGE_ARROW = np.array([1.00, 0.56, 0.22], dtype=np.float32)
COL_MINT = np.array([0.44, 0.84, 0.72], dtype=np.float32)
COL_SKY = np.array([0.45, 0.72, 0.96], dtype=np.float32)
COL_CREAM = np.array([0.92, 0.87, 0.79], dtype=np.float32)
COL_FLOOR = np.array([1.00, 1.00, 1.00], dtype=np.float32)


def sd_sphere(p: np.ndarray, c: tuple[float, float, float], r: float) -> np.ndarray:
    cx, cy, cz = c
    dx = p[..., 0] - cx
    dy = p[..., 1] - cy
    dz = p[..., 2] - cz
    return np.sqrt(dx * dx + dy * dy + dz * dz) - r


def sd_round_box(
    p: np.ndarray,
    c: tuple[float, float, float],
    b: tuple[float, float, float],
    r: float = 0.08,
) -> np.ndarray:
    cx, cy, cz = c
    bx, by, bz = b
    qx = np.abs(p[..., 0] - cx) - (bx - r)
    qy = np.abs(p[..., 1] - cy) - (by - r)
    qz = np.abs(p[..., 2] - cz) - (bz - r)
    mx = np.maximum(qx, 0.0)
    my = np.maximum(qy, 0.0)
    mz = np.maximum(qz, 0.0)
    out_d = np.sqrt(mx * mx + my * my + mz * mz)
    in_d = np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0.0)
    return out_d + in_d - r


def sd_capsule(
    p: np.ndarray,
    a: tuple[float, float, float],
    b: tuple[float, float, float],
    r: float,
) -> np.ndarray:
    ax, ay, az = a
    bx, by, bz = b
    abx, aby, abz = bx - ax, by - ay, bz - az
    apx = p[..., 0] - ax
    apy = p[..., 1] - ay
    apz = p[..., 2] - az
    denom = abx * abx + aby * aby + abz * abz + 1e-8
    t = np.clip((apx * abx + apy * aby + apz * abz) / denom, 0.0, 1.0)
    dx = apx - abx * t
    dy = apy - aby * t
    dz = apz - abz * t
    return np.sqrt(dx * dx + dy * dy + dz * dz) - r


def sd_cone_tip(
    p: np.ndarray,
    base: tuple[float, float, float],
    tip: tuple[float, float, float],
    r_base: float,
) -> np.ndarray:
    """Crisp smooth clay cone arrowhead tapering cleanly from r_base -> sharp rounded tip."""
    ax, ay, az = base
    bx, by, bz = tip
    abx, aby, abz = bx - ax, by - ay, bz - az
    apx = p[..., 0] - ax
    apy = p[..., 1] - ay
    apz = p[..., 2] - az
    denom = abx * abx + aby * aby + abz * abz + 1e-8
    t = np.clip((apx * abx + apy * aby + apz * abz) / denom, 0.0, 1.0)
    dx = apx - abx * t
    dy = apy - aby * t
    dz = apz - abz * t
    rad = np.maximum(0.012, r_base * (1.0 - t) ** 0.92)
    return np.sqrt(dx * dx + dy * dy + dz * dz) - rad


def _sample_bezier(
    pts: list[tuple[float, float, float]], steps: int = 14
) -> list[tuple[float, float, float]]:
    """Interpolate 3+ control points into a buttery-smooth quadratic/cubic Bezier polyline."""
    arr = np.array(pts, dtype=np.float32)
    ts = np.linspace(0.0, 1.0, steps)[:, None]
    if len(arr) == 3:
        p0, p1, p2 = arr
        curve = ((1 - ts) ** 2) * p0 + (2 * (1 - ts) * ts) * p1 + (ts ** 2) * p2
        return [tuple(row.tolist()) for row in curve]
    if len(arr) >= 4:
        # Uniform B-spline / De Casteljau generalized for N control points
        out = []
        n = len(arr) - 1
        from math import comb
        for t_val in np.linspace(0.0, 1.0, steps):
            pt = np.zeros(3, dtype=np.float32)
            for i in range(n + 1):
                pt += comb(n, i) * ((1.0 - t_val) ** (n - i)) * (t_val ** i) * arr[i]
            out.append(tuple(pt.tolist()))
        return out
    return pts


def sd_tunnel(p: np.ndarray) -> np.ndarray:
    """Clay arch block with wide round open tunnel straight through Z axis."""
    blk = sd_round_box(p, (0.0, -0.22, 0.0), (0.95, 0.72, 0.50), 0.09)
    hole = sd_cylinder_z(p, 0.0, -0.34, 0.54, 0.85, 0.0)
    return np.maximum(blk, -hole)


def sd_cylinder_z(
    p: np.ndarray, cx: float, cy: float, r: float, half_len: float, cz: float = 0.0
) -> np.ndarray:
    dx = p[..., 0] - cx
    dy = p[..., 1] - cy
    d_xy = np.sqrt(dx * dx + dy * dy) - r
    d_z = np.abs(p[..., 2] - cz) - half_len
    return np.minimum(np.maximum(d_xy, d_z), 0.0) + np.sqrt(
        np.maximum(d_xy, 0.0) ** 2 + np.maximum(d_z, 0.0) ** 2
    )


def sd_torus_y(p: np.ndarray, cx: float, cy: float, cz: float, R: float, r: float) -> np.ndarray:
    dx = p[..., 0] - cx
    dy = p[..., 1] - cy
    dz = p[..., 2] - cz
    q_x = np.sqrt(dx * dx + dz * dz) - R
    return np.sqrt(q_x * q_x + dy * dy) - r


def sd_arrow_chain(
    p: np.ndarray,
    pts: list[tuple[float, float, float]],
    r: float = 0.075,
    head_len: float = 0.36,
    head_r: float = 0.21,
    smooth: bool = True,
) -> np.ndarray:
    chain = _sample_bezier(pts, 14) if (smooth and len(pts) >= 3) else pts
    d = np.full(p.shape[:-1], 1e4, dtype=np.float32)
    for a, b in zip(chain[:-1], chain[1:]):
        d = np.minimum(d, sd_capsule(p, a, b, r))
    if len(chain) >= 2:
        p0 = np.array(chain[-2], dtype=np.float32)
        p1 = np.array(chain[-1], dtype=np.float32)
        v = p1 - p0
        n = float(np.linalg.norm(v)) + 1e-8
        u = v / n
        base = tuple((p1 - u * (head_len * 0.55)).tolist())
        tip = tuple((p1 + u * (head_len * 0.45)).tolist())
        d = np.minimum(d, sd_cone_tip(p, base, tip, head_r))
    return d


def sd_open_box(
    p: np.ndarray,
    c: tuple[float, float, float] = (0.0, -0.35, 0.0),
    outer: tuple[float, float, float] = (0.88, 0.58, 0.88),
    wall: float = 0.13,
) -> np.ndarray:
    """Open-top clay box/crate with slightly lowered front rim for clear interior visibility."""
    cx, cy, cz = c
    ox, oy, oz = outer
    d_out = sd_round_box(p, c, outer, 0.07)
    inner_c = (cx, cy + wall * 0.75, cz)
    inner_b = (ox - wall, oy, oz - wall)
    d_in = sd_round_box(p, inner_c, inner_b, 0.04)
    # Front viewing notch so object inside is never occluded
    notch = sd_round_box(p, (cx, cy + oy * 0.65, cz + oz), (ox * 0.62, oy * 0.6, wall * 1.4), 0.04)
    d = np.maximum(d_out, -d_in)
    d = np.maximum(d, -notch)
    return d


def sd_bridge(p: np.ndarray) -> np.ndarray:
    """Sturdy pastel clay bridge / arch table with open space cleanly underneath."""
    top = sd_round_box(p, (0.0, 0.28, 0.0), (1.05, 0.18, 0.68), 0.07)
    leg_l = sd_round_box(p, (-0.82, -0.34, 0.0), (0.20, 0.60, 0.64), 0.07)
    leg_r = sd_round_box(p, (0.82, -0.34, 0.0), (0.20, 0.60, 0.64), 0.07)
    return np.minimum(top, np.minimum(leg_l, leg_r))


class SceneBuilder:
    def __init__(self, floor_y: float = -0.95):
        self.floor_y = floor_y
        self.parts: list[tuple[Callable[[np.ndarray], np.ndarray], np.ndarray]] = []

    def add(self, fn: Callable[[np.ndarray], np.ndarray], color: np.ndarray) -> None:
        self.parts.append((fn, color))

    def eval(self, p: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
        d_floor = p[..., 1] - self.floor_y
        d_min = d_floor
        col = np.broadcast_to(COL_FLOOR, p.shape).copy()
        for fn, c in self.parts:
            d = fn(p)
            mask = d < d_min
            d_min = np.where(mask, d, d_min)
            if np.any(mask):
                col[mask] = c
        return d_min, col


def build_spatial_scenes() -> dict[str, tuple[SceneBuilder, tuple[float, float, float]]]:
    scenes: dict[str, tuple[SceneBuilder, tuple[float, float, float]]] = {}
    default_eye = (2.85, 2.35, 3.65)

    def add_scene(name: str, eye: tuple[float, float, float] = default_eye):
        sb = SceneBuilder()
        scenes[name] = (sb, eye)
        return sb

    # 1. above: sphere hovering clearly in midair above mint cube
    s = add_scene("above")
    s.add(lambda p: sd_round_box(p, (0.0, -0.52, 0.0), (0.62, 0.42, 0.62), 0.08), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, 0.56, 0.0), 0.36), COL_ORANGE)

    # 2. on: sphere resting directly on top surface of mint cube
    s = add_scene("on")
    s.add(lambda p: sd_round_box(p, (0.0, -0.46, 0.0), (0.65, 0.48, 0.65), 0.08), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, 0.37, 0.0), 0.36), COL_ORANGE)

    # 3. over: smooth Bezier orange arrow arcing cleanly over mint cube
    s = add_scene("over", (2.1, 2.0, 3.9))
    s.add(lambda p: sd_round_box(p, (0.0, -0.52, 0.0), (0.60, 0.42, 0.60), 0.08), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(-1.05, 0.02, 0.0), (-0.45, 1.05, 0.0), (0.45, 1.05, 0.0), (1.00, 0.14, 0.0)], 0.075, 0.34, 0.19), COL_ORANGE)

    # 4. onto: smooth Bezier arrow landing cleanly onto top surface of mint cube
    s = add_scene("onto", (2.25, 2.25, 3.75))
    s.add(lambda p: sd_round_box(p, (0.0, -0.50, 0.0), (0.68, 0.44, 0.68), 0.08), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(-1.05, 0.45, 0.0), (-0.50, 1.05, 0.0), (-0.02, 0.22, 0.0)], 0.075, 0.32, 0.18), COL_ORANGE)

    # 5. under: orange sphere tucked directly under mint arch bridge
    s = add_scene("under", (1.6, 1.55, 4.1))
    s.add(sd_bridge, COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, -0.56, 0.0), 0.38), COL_ORANGE)

    # 6. underneath: same unmistakable bridge arch with smaller cozy sphere tucked deeper underneath
    s = add_scene("underneath", (1.35, 1.35, 4.1))
    s.add(sd_bridge, COL_SKY)
    s.add(lambda p: sd_sphere(p, (0.0, -0.59, -0.05), 0.35), COL_ORANGE)

    # 7. below: floating mint block up high, orange sphere cleanly hovering directly below it
    s = add_scene("below", (2.5, 1.65, 3.9))
    s.add(lambda p: sd_round_box(p, (0.0, 0.56, 0.0), (0.72, 0.26, 0.68), 0.07), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, -0.48, 0.0), 0.38), COL_ORANGE)

    # 8. beneath: floating mint block with orange sphere nestled closely directly beneath
    s = add_scene("beneath", (2.1, 1.45, 4.0))
    s.add(lambda p: sd_round_box(p, (0.0, 0.44, 0.0), (0.76, 0.24, 0.72), 0.07), COL_SKY)
    s.add(lambda p: sd_sphere(p, (0.0, -0.45, 0.0), 0.37), COL_ORANGE)

    # 9. in & inside & within: open-top cutaway box looking down from 3/4 view with orange sphere nestled inside
    for nm, col_box, r_ball in [("in", COL_MINT, 0.40), ("inside", COL_SKY, 0.42), ("within", COL_CREAM, 0.36)]:
        s = add_scene(nm, (2.4, 2.75, 3.3))
        s.add(sd_open_box, col_box)
        s.add(lambda p, r=r_ball: sd_sphere(p, (0.0, -0.34, 0.0), r), COL_ORANGE)

    # 10. into: arrow curving from outside down into the open box
    s = add_scene("into", (2.2, 2.65, 3.45))
    s.add(sd_open_box, COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(-1.02, 0.56, 0.0), (-0.35, 1.05, 0.0), (0.0, 0.05, 0.0)], 0.072, 0.30, 0.18), COL_ORANGE)

    # 11. out: open box with curved orange arrow stepping out to the right
    s = add_scene("out", (2.3, 2.75, 3.85))
    s.add(sd_open_box, COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(0.0, -0.12, 0.0), (0.50, 0.98, 0.0), (1.12, 0.20, 0.0)], 0.072, 0.30, 0.18), COL_ORANGE)

    # 12. outside: closed/open mint box on left, orange sphere sitting clearly outside next to it
    s = add_scene("outside", (2.4, 2.55, 3.6))
    s.add(lambda p: sd_open_box(p, (-0.36, -0.35, 0.0), (0.72, 0.56, 0.72), 0.11), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.85, -0.58, 0.18), 0.36), COL_ORANGE)

    # 13. between: orange sphere centered cleanly between two mint cubes
    s = add_scene("between", (1.5, 2.2, 4.1))
    s.add(lambda p: sd_round_box(p, (-0.98, -0.45, 0.0), (0.42, 0.48, 0.52), 0.07), COL_MINT)
    s.add(lambda p: sd_round_box(p, (0.98, -0.45, 0.0), (0.42, 0.48, 0.52), 0.07), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, -0.55, 0.0), 0.38), COL_ORANGE)

    # 14. among: cluster of 5 mint spheres surrounding one orange sphere in the center
    s = add_scene("among", (1.6, 2.8, 3.7))
    ring = [(-0.82, -0.56, -0.52), (0.82, -0.56, -0.52), (-0.88, -0.56, 0.46), (0.88, -0.56, 0.46), (0.0, -0.56, -0.88)]
    for cx, cy, cz in ring:
        s.add(lambda p, c=(cx, cy, cz): sd_sphere(p, c, 0.33), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.0, -0.54, 0.10), 0.37), COL_ORANGE)

    # 15. beside: orange sphere right beside mint cube side-by-side
    s = add_scene("beside", (1.4, 1.95, 4.0))
    s.add(lambda p: sd_round_box(p, (-0.42, -0.43, 0.0), (0.50, 0.50, 0.50), 0.08), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.56, -0.57, 0.0), 0.37), COL_ORANGE)

    # 16. aside: mint cube centered, orange sphere pushed off to side with small side arrow
    s = add_scene("aside", (1.4, 2.2, 4.1))
    s.add(lambda p: sd_round_box(p, (-0.48, -0.45, 0.0), (0.46, 0.48, 0.48), 0.08), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(0.15, -0.55, 0.0), (0.72, -0.55, 0.0)], 0.06, 0.25, 0.16), COL_CREAM)
    s.add(lambda p: sd_sphere(p, (1.02, -0.56, 0.0), 0.34), COL_ORANGE)

    # 17. behind: larger mint cube in front, orange sphere peeking out directly behind right shoulder
    s = add_scene("behind", (1.45, 1.65, 4.0))
    s.add(lambda p: sd_round_box(p, (-0.15, -0.41, 0.42), (0.56, 0.54, 0.50), 0.08), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.36, -0.48, -0.60), 0.42), COL_ORANGE)

    # 18. opposite: mint cube & orange cube/sphere facing each other directly across gap
    s = add_scene("opposite", (1.5, 2.2, 4.0))
    s.add(lambda p: sd_round_box(p, (-0.88, -0.45, 0.0), (0.42, 0.48, 0.48), 0.07), COL_MINT)
    s.add(lambda p: sd_round_box(p, (0.88, -0.45, 0.0), (0.42, 0.48, 0.48), 0.07), COL_ORANGE)

    # 19. near vs far vs away
    s = add_scene("near", (1.7, 2.0, 4.0))
    s.add(lambda p: sd_round_box(p, (-0.42, -0.45, 0.0), (0.48, 0.48, 0.48), 0.08), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.46, -0.58, 0.12), 0.35), COL_ORANGE)

    s = add_scene("far", (1.8, 2.0, 4.2))
    s.add(lambda p: sd_round_box(p, (-0.75, -0.45, 0.85), (0.45, 0.48, 0.45), 0.07), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.85, -0.62, -1.65), 0.33), COL_ORANGE)

    s = add_scene("away", (1.6, 2.2, 4.1))
    s.add(lambda p: sd_round_box(p, (-0.72, -0.45, 0.0), (0.46, 0.48, 0.46), 0.07), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(-0.08, -0.52, 0.0), (1.05, -0.52, 0.0)], 0.07, 0.30, 0.19), COL_ORANGE)

    # 20. toward / towards: arrow pointing toward mint cube
    for nm in ("toward", "towards"):
        s = add_scene(nm, (1.6, 2.2, 4.1))
        s.add(lambda p: sd_round_box(p, (0.72, -0.45, 0.0), (0.48, 0.48, 0.48), 0.08), COL_MINT)
        s.add(lambda p: sd_arrow_chain(p, [(-1.05, -0.52, 0.0), (0.08, -0.52, 0.0)], 0.075, 0.32, 0.20), COL_ORANGE)

    # 21. through: wide tunnel arch + smooth orange arrow visibly piercing straight through
    s = add_scene("through", (2.15, 1.75, 3.6))
    s.add(sd_tunnel, COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(0.0, -0.34, -1.35), (0.0, -0.34, 1.25)], 0.085, 0.34, 0.20, False), COL_ORANGE)

    # 22. across: wide sky-blue river slab with smooth Bezier arrow arcing across
    s = add_scene("across", (2.25, 2.55, 4.05))
    s.add(lambda p: sd_round_box(p, (0.0, -0.78, 0.0), (0.52, 0.16, 1.15), 0.05), COL_SKY)
    s.add(lambda p: sd_arrow_chain(p, [(-0.98, -0.38, 0.0), (-0.36, 0.62, 0.0), (0.36, 0.62, 0.0), (0.94, -0.25, 0.0)], 0.075, 0.32, 0.18), COL_ORANGE)

    # 23. along: long mint rail + parallel orange arrow gliding along it
    s = add_scene("along", (2.6, 2.35, 3.6))
    s.add(lambda p: sd_round_box(p, (-0.32, -0.62, 0.0), (0.28, 0.32, 1.25), 0.07), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(0.42, -0.56, 1.05), (0.42, -0.56, -1.05)], 0.075, 0.32, 0.20), COL_ORANGE)

    # 24. around: central mint pillar + circular orange torus ring + arrow curving around
    s = add_scene("around", (2.1, 2.8, 3.4))
    s.add(lambda p: sd_round_box(p, (0.0, -0.34, 0.0), (0.36, 0.60, 0.36), 0.12), COL_MINT)
    s.add(lambda p: sd_torus_y(p, 0.0, -0.46, 0.0, 0.85, 0.075), COL_ORANGE)
    s.add(lambda p: sd_cone_tip(p, (-0.30, -0.46, 0.82), (0.22, -0.46, 0.85), 0.20), COL_ORANGE)

    # 25. beyond: mint hurdle block in foreground, orange sphere far beyond it with arc arrow
    s = add_scene("beyond", (2.3, 2.3, 3.8))
    s.add(lambda p: sd_round_box(p, (-0.18, -0.46, 0.45), (0.75, 0.48, 0.20), 0.07), COL_MINT)
    s.add(lambda p: sd_sphere(p, (0.38, -0.58, -0.78), 0.36), COL_ORANGE)

    # 26. up / upward / down / downward / backward
    for nm, col in [("up", COL_ORANGE), ("upward", COL_MINT)]:
        s = add_scene(nm, (1.1, 1.4, 4.1))
        s.add(lambda p: sd_arrow_chain(p, [(0.0, -0.72, 0.0), (0.0, 0.72, 0.0)], 0.12, 0.46, 0.32), col)
        s.add(lambda p: sd_round_box(p, (0.0, -0.82, 0.0), (0.68, 0.12, 0.50), 0.05), COL_CREAM)

    for nm, col in [("down", COL_ORANGE), ("downward", COL_SKY)]:
        s = add_scene(nm, (1.1, 1.4, 4.1))
        s.add(lambda p: sd_arrow_chain(p, [(0.0, 0.76, 0.0), (0.0, -0.58, 0.0)], 0.12, 0.46, 0.32), col)
        s.add(lambda p: sd_round_box(p, (0.0, -0.82, 0.0), (0.68, 0.12, 0.50), 0.05), COL_CREAM)

    s = add_scene("backward", (1.6, 2.1, 4.1))
    s.add(lambda p: sd_round_box(p, (0.58, -0.45, 0.0), (0.45, 0.48, 0.48), 0.08), COL_MINT)
    s.add(lambda p: sd_arrow_chain(p, [(0.02, -0.48, 0.0), (-0.98, -0.48, 0.0)], 0.085, 0.34, 0.22), COL_ORANGE)

    return scenes


def render_scene(
    scene: SceneBuilder,
    eye: tuple[float, float, float],
    res: int = 384,
) -> Image.Image:
    # Camera basis looking toward origin (0, -0.20, 0)
    eye_v = np.array(eye, dtype=np.float32)
    target = np.array([0.0, -0.20, 0.0], dtype=np.float32)
    forward = target - eye_v
    forward /= np.linalg.norm(forward)
    world_up = np.array([0.0, 1.0, 0.0], dtype=np.float32)
    right = np.cross(forward, world_up)
    right /= np.linalg.norm(right)
    up = np.cross(right, forward)

    # Tight studio framing so clay objects fill ~65-75% of 256x256 card cleanly
    u = np.linspace(-1.0, 1.0, res, dtype=np.float32)
    v = np.linspace(1.0, -1.0, res, dtype=np.float32)
    uu, vv = np.meshgrid(u, v)
    fov = 0.40
    rd = (
        forward[None, None, :]
        + (uu[..., None] * fov) * right[None, None, :]
        + (vv[..., None] * fov) * up[None, None, :]
    )
    rd /= np.linalg.norm(rd, axis=-1, keepdims=True)
    ro = np.broadcast_to(eye_v, rd.shape).copy()

    # Sphere-tracing raymarch
    t = np.zeros((res, res), dtype=np.float32)
    hit = np.zeros((res, res), dtype=bool)
    active = np.ones((res, res), dtype=bool)

    for _ in range(52):
        if not np.any(active):
            break
        p_act = ro[active] + rd[active] * t[active, None]
        d_act, _ = scene.eval(p_act)
        close = d_act < 0.0022
        far = (t[active] + d_act) > 12.0

        # Update masked elements via flat indices
        act_idx = np.flatnonzero(active)
        t.ravel()[act_idx] += np.maximum(d_act, 0.0)
        hit.ravel()[act_idx[close]] = True
        active.ravel()[act_idx[close | far]] = False

    # Shade hit pixels
    img = np.ones((res, res, 3), dtype=np.float32)  # pure white studio background
    if np.any(hit):
        p_hit = ro[hit] + rd[hit] * t[hit, None]
        _, mat_col = scene.eval(p_hit)
        is_floor = np.abs(p_hit[:, 1] - scene.floor_y) < 0.01

        # Finite-difference normals
        eps = 0.003
        ex = np.array([eps, 0.0, 0.0], dtype=np.float32)
        ey = np.array([0.0, eps, 0.0], dtype=np.float32)
        ez = np.array([0.0, 0.0, eps], dtype=np.float32)
        dx = scene.eval(p_hit + ex)[0] - scene.eval(p_hit - ex)[0]
        dy = scene.eval(p_hit + ey)[0] - scene.eval(p_hit - ey)[0]
        dz = scene.eval(p_hit + ez)[0] - scene.eval(p_hit - ez)[0]
        nor = np.stack([dx, dy, dz], axis=-1)
        nor /= np.linalg.norm(nor, axis=-1, keepdims=True) + 1e-8

        # Soft studio key light + fill + AO
        l_dir = np.array([0.48, 0.80, 0.36], dtype=np.float32)
        l_dir /= np.linalg.norm(l_dir)

        # Soft shadows along key light (ignoring floor self-intersection)
        sh = np.ones(len(p_hit), dtype=np.float32)
        st = np.full(len(p_hit), 0.035, dtype=np.float32)
        for _ in range(18):
            sp = p_hit + l_dir[None, :] * st[:, None]
            # Evaluate objects ONLY (exclude floor so floor doesn't shadow itself)
            sd_obj = np.full(len(p_hit), 1e4, dtype=np.float32)
            for fn, _ in scene.parts:
                sd_obj = np.minimum(sd_obj, fn(sp))
            sh = np.minimum(sh, np.clip(9.0 * sd_obj / (st + 0.05), 0.0, 1.0))
            st += np.clip(sd_obj, 0.03, 0.35)

        # Simple 3-step clay AO
        ao = np.ones(len(p_hit), dtype=np.float32)
        for k, step_d in enumerate([0.07, 0.18, 0.36]):
            ap = p_hit + nor * step_d
            sd_a = np.full(len(p_hit), 1e4, dtype=np.float32)
            for fn, _ in scene.parts:
                sd_a = np.minimum(sd_a, fn(ap))
            if not np.all(is_floor):
                sd_a = np.minimum(sd_a, ap[:, 1] - scene.floor_y)
            ao -= (0.45 / (k + 1)) * np.clip(step_d - sd_a, 0.0, step_d) / step_d
        ao = np.clip(ao, 0.35, 1.0)

        # Matte clay wrap diffuse + gentle rim
        ndotl = np.clip((np.sum(nor * l_dir[None, :], axis=-1) + 0.25) / 1.25, 0.0, 1.0)
        hemi = 0.5 + 0.5 * nor[:, 1]
        v_dir = -rd[hit]
        rim = np.clip(1.0 - np.sum(nor * v_dir, axis=-1), 0.0, 1.0) ** 3.0

        # Warm sunlit clay + bright soft studio bounce fill so underside stays pastel & vibrant
        light_rgb = (
            ndotl[:, None] * sh[:, None] * np.array([0.68, 0.65, 0.60], dtype=np.float32)
            + (0.50 + 0.22 * hemi[:, None]) * ao[:, None] * np.array([0.92, 0.95, 1.00], dtype=np.float32)
            + rim[:, None] * 0.14
        )
        shaded_obj = np.clip(mat_col * light_rgb, 0.0, 1.0)

        # Floor stays pure #FFFFFF studio floor with soft shadow + ambient occlusion fading out radially
        rad = np.sqrt(p_hit[:, 0] ** 2 + p_hit[:, 2] ** 2)
        fade = np.clip(1.0 - (rad - 1.1) / 1.3, 0.0, 1.0)
        shadow_val = 1.0 - fade * (1.0 - np.clip(0.55 + 0.45 * sh * ao, 0.0, 1.0)) * 0.38
        shaded_floor = np.stack([shadow_val * 0.99, shadow_val * 0.99, np.minimum(1.0, shadow_val * 1.01)], axis=-1)

        out_col = np.where(is_floor[:, None], shaded_floor, shaded_obj)
        # Gamma 2.2 encoding
        out_col = np.clip(out_col, 0.0, 1.0) ** (1.0 / 2.2)
        img[hit] = out_col

    pil_raw = Image.fromarray((img * 255.0 + 0.5).astype(np.uint8), mode="RGB")
    return pil_raw.resize((256, 256), Image.Resampling.LANCZOS)


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate geometric 3D clay diagrams for spatial prepositions")
    parser.add_argument("--out-dir", type=Path, default=OUTPUT_DIR)
    parser.add_argument("--words", type=str, default="", help="Comma-separated subset (default: all)")
    parser.add_argument("--res", type=int, default=384, help="Internal supersample render resolution")
    parser.add_argument("--quality", type=int, default=82)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-manifest", action="store_true")
    args = parser.parse_args()

    scenes = build_spatial_scenes()
    targets = [w.strip().lower() for w in args.words.split(",") if w.strip()] if args.words else list(scenes.keys())
    args.out_dir.mkdir(parents=True, exist_ok=True)

    t0 = time.time()
    written = 0
    for nm in targets:
        if nm not in scenes:
            print(f"[SKIP] unknown scene '{nm}'")
            continue
        out_p = args.out_dir / f"{nm}.webp"
        if out_p.exists() and not args.overwrite:
            continue
        sb, eye = scenes[nm]
        im = render_scene(sb, eye, res=args.res)
        im.save(out_p, "WEBP", quality=args.quality, method=6)
        written += 1
        print(f"  rendered {nm}.webp ({out_p.stat().st_size} bytes)")

    print(f"[Spatial Clay] rendered {written} images in {time.time() - t0:.2f}s -> {args.out_dir}")
    if args.update_manifest:
        import generate_word_images as gwi
        gwi.update_manifest()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
