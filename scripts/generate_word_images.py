# -*- coding: utf-8 -*-
"""
Local Word Image Generator for F:\\EN Web App
Uses SDXL-Turbo / SDXL-Lightning via local PyTorch/Diffusers (F:\\sd_env)
Zero external API calls. Everything runs locally on RTX 3050.
"""

import os
import sys
import re
import json
import zlib
import argparse
from pathlib import Path

if os.name == "nt":
    import msvcrt

WORKSPACE = Path(__file__).resolve().parent.parent
OUTPUT_DIR = WORKSPACE / "images" / "words"
MANIFEST_FILE = WORKSPACE / "images_manifest.js"
LOCK_FILE = WORKSPACE / "tmp" / "compile_dual.lock"

# Standard everyday concrete noun categories to prioritize
CONCRETE_KEYWORDS = {
    # Animals & Nature
    "cat", "dog", "bird", "fish", "horse", "cow", "pig", "sheep", "lion", "tiger", "bear",
    "elephant", "monkey", "rabbit", "duck", "chicken", "snake", "tree", "flower", "leaf",
    "sun", "moon", "star", "cloud", "rain", "snow", "mountain", "river", "sea", "ocean",
    # Food & Drink
    "apple", "banana", "orange", "bread", "cake", "rice", "noodle", "egg", "meat", "milk",
    "water", "tea", "coffee", "juice", "cheese", "soup", "pizza", "burger", "cookie", "fruit",
    # Household & Daily Objects
    "table", "chair", "bed", "door", "window", "clock", "lamp", "book", "pen", "pencil",
    "cup", "glass", "bottle", "plate", "bowl", "knife", "fork", "spoon", "phone", "camera",
    "computer", "key", "bag", "box", "umbrella", "mirror", "towel", "soap",
    # Clothes
    "shirt", "pants", "shoes", "hat", "cap", "dress", "coat", "jacket", "socks", "ring",
    "watch", "glasses",
    # Vehicles & Places
    "car", "bus", "train", "plane", "airplane", "ship", "boat", "bicycle", "bike", "truck",
    "house", "home", "school", "hospital", "store", "shop", "park", "bridge", "road", "street"
}

def get_local_model_path(repo_id: str) -> str:
    """Resolve local snapshot directory in F:\\hf_models if exists."""
    hf_home = Path(os.environ.get("HF_HOME", r"F:\hf_models"))
    hub_dir = hf_home / "hub" / f"models--{repo_id.replace('/', '--')}"
    snap_dir = hub_dir / "snapshots"
    if snap_dir.exists():
        snaps = [p for p in snap_dir.iterdir() if p.is_dir()]
        if snaps:
            return str(snaps[0])
    return repo_id

def clean_word_key(word: str) -> str:
    """Normalize word to safe lowercase filename token."""
    w = word.strip().lower()
    w = re.sub(r'[\s\-_]+', '_', w)
    w = re.sub(r'[^a-z0-9_]', '', w)
    return w

def extract_nouns_from_db():
    """Extract vocabulary words that have a noun (n.) definition."""
    candidates = {}
    db_files = [
        WORKSPACE / "words_data.js",
        WORKSPACE / "jh_data.js",
        WORKSPACE / "toeic_data.js",
        WORKSPACE / "synonyms_unit8_data.js",
        WORKSPACE / "examples_unit9_data.js",
        WORKSPACE / "listening_words_data.js",
    ]

    for p in db_files:
        if not p.exists():
            continue
        try:
            with open(p, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception:
            continue

        # Extract items using regex
        items = re.findall(r'\{\s*"id":\s*(\d+),\s*"en":\s*"([^"]+)",[\s\S]*?"zh":\s*"([^"]+)"', content)
        for _, en, zh in items:
            clean = clean_word_key(en)
            if not clean or len(clean) < 2:
                continue
            # Check if has noun definition
            has_noun = bool(re.search(r'\b(n|名|名詞)\b', zh, re.I))
            if has_noun:
                if clean not in candidates:
                    candidates[clean] = {
                        "en": en.strip(),
                        "zh": zh.strip(),
                        "is_concrete": clean in CONCRETE_KEYWORDS
                    }
    return candidates

def update_manifest():
    """Scan OUTPUT_DIR and write images_manifest.js."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    images = []
    for f in sorted(OUTPUT_DIR.glob("*.webp")):
        images.append(f.stem.lower())

    content = (
        "// Auto-generated word images manifest\n"
        "// Used by frontend for instant O(1) image availability checks\n"
        "window.WORD_IMAGES_MANIFEST = new Set([\n"
    )
    for word in sorted(set(images)):
        content += f'  "{word}",\n'
    content += "]);\n"

    with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[Manifest] Updated {MANIFEST_FILE} with {len(images)} images.")

def check_gpu_vram():
    """Check free VRAM in MB via nvidia-smi."""
    try:
        import subprocess
        out = subprocess.check_output(
            ["nvidia-smi", "--query-gpu=memory.free", "--format=csv,noheader,nounits"],
            encoding="utf-8"
        )
        return int(out.strip().split("\n")[0])
    except Exception:
        return 9999

def is_compiler_lock_active() -> bool:
    """Return True if mnemonic compiler holds compile_dual.lock."""
    if not LOCK_FILE.exists():
        return False
    if os.name == "nt":
        try:
            with LOCK_FILE.open("r+", encoding="utf-8") as fh:
                msvcrt.locking(fh.fileno(), msvcrt.LK_NBLCK, 1)
                fh.seek(0)
                msvcrt.locking(fh.fileno(), msvcrt.LK_UNLCK, 1)
            return False
        except OSError:
            return True
    return False


def build_prompt(word: str, style: str = "sticker", scene: str = "") -> str:
    """Construct prompt optimized for educational vocabulary illustrations."""
    subject = scene.strip() if scene and scene.strip() else f"a {word.replace('_', ' ').strip()}"
    if style == "sticker":
        return (
            f"A high quality vector sticker icon of {subject}, centered, smooth clean outlines, "
            f"modern minimalist educational illustration, solid white background, vibrant colors, "
            f"crisp details, cute flat vector art, isolated subject, no text, no watermark, no words"
        )
    elif style == "realistic":
        return (
            f"A studio photo of {subject}, isolated on clean solid background, sharp focus, "
            f"studio lighting, highly detailed, 8k resolution, centered composition, no text"
        )
    else:
        return (
            f"Simple icon of {subject}, centered, clean graphic design, minimalist, educational, "
            f"white background, no letters, no text"
        )


def _load_prompt_map(path_str: str) -> dict[str, str]:
    out: dict[str, str] = {}
    if not path_str or not os.path.exists(path_str):
        return out
    with open(path_str, "r", encoding="utf-8") as f:
        data = json.load(f)
    if isinstance(data, dict):
        for k, v in data.items():
            clean = clean_word_key(str(k))
            if clean and isinstance(v, str) and v.strip():
                out[clean] = v.strip()
    elif isinstance(data, list):
        for item in data:
            if isinstance(item, dict):
                w = item.get("word") or item.get("en") or ""
                s = item.get("scene") or item.get("prompt") or ""
                clean = clean_word_key(str(w))
                if clean and isinstance(s, str) and s.strip():
                    out[clean] = s.strip()
    return out


def _load_pipeline_fp16(loader_cls, path_or_repo: str, torch_mod, **kwargs):
    try:
        return loader_cls.from_pretrained(path_or_repo, dtype=torch_mod.float16, **kwargs)
    except TypeError:
        return loader_cls.from_pretrained(path_or_repo, torch_dtype=torch_mod.float16, **kwargs)

def main():
    parser = argparse.ArgumentParser(description="Local Word Image Generator")
    parser.add_argument("--file", type=str, default="", help="JSON file (list of words, list of {word, scene}, or {word: scene})")
    parser.add_argument("--prompt-map", type=str, default="", help="Optional JSON file mapping word -> custom English scene prompt")
    parser.add_argument("--dry-run", action="store_true", help="Inspect candidates without generating")
    parser.add_argument("--concrete-only", action="store_true", help="Only process concrete everyday nouns")
    parser.add_argument("--words", type=str, default="", help="Comma-separated word list (e.g. cat,dog,apple)")
    parser.add_argument("--limit", type=int, default=0, help="Max images to generate (0 = all)")
    parser.add_argument("--model", type=str, default="sdxl-turbo", choices=["sdxl-turbo", "sdxl-lightning"])
    parser.add_argument("--steps", type=int, default=1, help="Inference steps (1 for turbo, 4 for lightning)")
    parser.add_argument("--style", type=str, default="sticker", choices=["sticker", "icon", "realistic"])
    parser.add_argument("--size", type=int, default=256, help="Output WebP square dimension (e.g. 256 or 192)")
    parser.add_argument("--quality", type=int, default=85, help="WebP quality (1-100, default 85)")
    parser.add_argument("--save-every", type=int, default=25, help="Manifest flush interval")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing images")
    parser.add_argument("--update-manifest-only", action="store_true", help="Rebuild manifest without generating")
    parser.add_argument("--force", action="store_true", help="Bypass VRAM & lock check")
    args = parser.parse_args()

    if args.update_manifest_only:
        update_manifest()
        return

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    all_nouns = extract_nouns_from_db()

    # Determine target words & optional custom scenes
    prompt_map: dict[str, str] = {}
    targets: list[str] = []
    if args.file and os.path.exists(args.file):
        with open(args.file, "r", encoding="utf-8") as f:
            file_data = json.load(f)
        if isinstance(file_data, dict):
            for k, v in file_data.items():
                clean = clean_word_key(str(k))
                if clean:
                    targets.append(clean)
                    if isinstance(v, str) and v.strip():
                        prompt_map[clean] = v.strip()
        elif isinstance(file_data, list):
            for entry in file_data:
                if isinstance(entry, str):
                    clean = clean_word_key(entry)
                    if clean:
                        targets.append(clean)
                elif isinstance(entry, dict):
                    w = entry.get("word") or entry.get("en") or ""
                    s = entry.get("scene") or entry.get("prompt") or ""
                    clean = clean_word_key(str(w))
                    if clean:
                        targets.append(clean)
                        if isinstance(s, str) and s.strip():
                            prompt_map[clean] = s.strip()
    elif args.words:
        for w in args.words.split(","):
            clean = clean_word_key(w)
            if clean:
                targets.append(clean)
    elif args.concrete_only:
        for clean, info in all_nouns.items():
            if info["is_concrete"]:
                targets.append(clean)
    else:
        # Sort priority: concrete first, then alphabetical
        sorted_keys = sorted(all_nouns.keys(), key=lambda k: (0 if all_nouns[k]["is_concrete"] else 1, k))
        targets = sorted_keys

    if args.prompt_map:
        prompt_map.update(_load_prompt_map(args.prompt_map))

    # Deduplicate targets preserving order and filter out existing if not overwrite
    seen_targets: set[str] = set()
    pending: list[str] = []
    for clean in targets:
        if clean in seen_targets:
            continue
        seen_targets.add(clean)
        out_file = OUTPUT_DIR / f"{clean}.webp"
        if args.overwrite or not out_file.exists():
            pending.append(clean)

    if args.limit > 0:
        pending = pending[:args.limit]

    custom_prompt_hits = sum(1 for w in pending if w in prompt_map)
    print(f"[Total Noun DB] Found {len(all_nouns)} nouns ({sum(1 for v in all_nouns.values() if v['is_concrete'])} concrete).")
    print(f"[Target Queue] Targets: {len(seen_targets)} | Pending: {len(pending)} | Custom scenes: {custom_prompt_hits} | Out: {args.size}x{args.size} q={args.quality}")

    if args.dry_run:
        print("[Dry Run] First 20 pending words:")
        for w in pending[:20]:
            sc = f" -> {prompt_map[w]}" if w in prompt_map else ""
            print(f"  - {w}{sc}")
        return

    if not pending:
        print("[Done] All requested word images already exist.")
        update_manifest()
        return

    if is_compiler_lock_active() and not args.force:
        print(f"[ERROR] Mnemonic compiler lock ({LOCK_FILE}) is currently active on GPU.")
        print("Wait for compile_local_mnemonics.py to finish and unload Ollama, or pass --force.")
        sys.exit(1)

    # Check VRAM safety
    free_vram = check_gpu_vram()
    print(f"[GPU Check] Free VRAM: {free_vram} MB")
    if free_vram < 4000 and not args.force:
        print(f"[ERROR] Only {free_vram} MB free VRAM! SDXL requires at least 4500-6000 MB.")
        print("Please ensure other GPU processes (e.g. Ollama compiler) are paused before running image generation.")
        print("Run with --force to override at your own risk.")
        sys.exit(1)

    print(f"[Pipeline] Loading model {args.model} on CUDA...")
    import torch
    from PIL import Image

    hf_home = os.environ.get("HF_HOME", r"F:\hf_models")
    os.environ["HF_HOME"] = hf_home

    if args.model == "sdxl-turbo":
        from diffusers import AutoPipelineForText2Image
        local_path = get_local_model_path("stabilityai/sdxl-turbo")
        print(f"[Pipeline] Loading from local path: {local_path}", flush=True)
        pipe = _load_pipeline_fp16(
            AutoPipelineForText2Image,
            local_path,
            torch,
            variant="fp16",
            local_files_only=True,
        )
        pipe.to("cuda")
        # Optimization for tight 8GB VRAM
        pipe.enable_attention_slicing()
        guidance_scale = 0.0
        steps = args.steps if args.steps else 1
    else:
        from diffusers import StableDiffusionXLPipeline, EulerDiscreteScheduler
        base_path = get_local_model_path("stabilityai/stable-diffusion-xl-base-1.0")
        repo_id = "ByteDance/SDXL-Lightning"
        ckpt = "sdxl_lightning_4step_lora.safetensors"
        print(f"[Pipeline] Loading base from local path: {base_path}", flush=True)
        pipe = _load_pipeline_fp16(
            StableDiffusionXLPipeline,
            base_path,
            torch,
            variant="fp16",
            local_files_only=True,
        )
        pipe.load_lora_weights(repo_id, weight_name=ckpt, cache_dir=hf_home, local_files_only=True)
        pipe.fuse_lora()
        pipe.scheduler = EulerDiscreteScheduler.from_config(pipe.scheduler.config, timestep_spacing="trailing")
        pipe.to("cuda")
        pipe.enable_attention_slicing()
        guidance_scale = 0.0
        steps = 4

    print(f"[Pipeline] Loaded successfully. Starting generation of {len(pending)} images...")
    neg_prompt = "text, letters, words, watermark, signature, blurry, deformed, distorted, low quality, photorealistic messy background"

    for idx, clean in enumerate(pending, 1):
        prompt = build_prompt(clean, args.style, scene=prompt_map.get(clean, ""))
        out_file = OUTPUT_DIR / f"{clean}.webp"
        print(f"[{idx}/{len(pending)}] Generating '{clean}'...", flush=True)

        try:
            seed = 42 + (zlib.crc32(clean.encode("utf-8")) % 100000)
            generator = torch.Generator("cuda").manual_seed(seed)
            result = pipe(
                prompt=prompt,
                negative_prompt=neg_prompt,
                num_inference_steps=steps,
                guidance_scale=guidance_scale,
                width=512,
                height=512,
                generator=generator
            )
            raw_img = result.images[0]
            img_out = raw_img.resize((args.size, args.size), Image.Resampling.LANCZOS)
            img_out.save(out_file, "WEBP", quality=args.quality, method=6)
        except Exception as e:
            print(f"[FAIL] Error generating '{clean}': {e}", flush=True)

        if args.save_every > 0 and idx % args.save_every == 0:
            update_manifest()
            print(f"[Progress] {idx}/{len(pending)} completed ({idx*100//len(pending)}%).", flush=True)

    print("[Complete] Finished generating images.", flush=True)
    update_manifest()

if __name__ == "__main__":
    main()
