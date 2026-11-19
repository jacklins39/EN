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
import argparse
from pathlib import Path

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

def build_prompt(word: str, style: str = "sticker") -> str:
    """Construct prompt optimized for educational vocabulary illustrations."""
    if style == "sticker":
        return (
            f"A high quality vector sticker icon of a {word}, centered, smooth clean outlines, "
            f"modern minimalist educational illustration, solid white background, vibrant colors, "
            f"crisp details, cute flat vector art, isolated subject, no text, no watermark, no words"
        )
    elif style == "realistic":
        return (
            f"A studio photo of a {word}, isolated on clean solid background, sharp focus, "
            f"studio lighting, highly detailed, 8k resolution, centered composition, no text"
        )
    else:
        return (
            f"Simple icon of a {word}, centered, clean graphic design, minimalist, educational, "
            f"white background, no letters, no text"
        )

def main():
    parser = argparse.ArgumentParser(description="Local Word Image Generator")
    parser.add_argument("--file", type=str, default="", help="JSON file containing list of target words")
    parser.add_argument("--dry-run", action="store_true", help="Inspect candidates without generating")
    parser.add_argument("--concrete-only", action="store_true", help="Only process concrete everyday nouns")
    parser.add_argument("--words", type=str, default="", help="Comma-separated word list (e.g. cat,dog,apple)")
    parser.add_argument("--limit", type=int, default=0, help="Max images to generate (0 = all)")
    parser.add_argument("--model", type=str, default="sdxl-turbo", choices=["sdxl-turbo", "sdxl-lightning"])
    parser.add_argument("--steps", type=int, default=1, help="Inference steps (1 for turbo, 4 for lightning)")
    parser.add_argument("--style", type=str, default="sticker", choices=["sticker", "icon", "realistic"])
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing images")
    parser.add_argument("--update-manifest-only", action="store_true", help="Rebuild manifest without generating")
    parser.add_argument("--force", action="store_true", help="Bypass VRAM check")
    args = parser.parse_args()

    if args.update_manifest_only:
        update_manifest()
        return

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    all_nouns = extract_nouns_from_db()

    # Determine target words
    targets = []
    if args.file and os.path.exists(args.file):
        with open(args.file, "r", encoding="utf-8") as f:
            file_data = json.load(f)
            for w in file_data:
                clean = clean_word_key(w)
                if clean:
                    targets.append(clean)
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

    # Filter out existing if not overwrite
    pending = []
    for clean in targets:
        out_file = OUTPUT_DIR / f"{clean}.webp"
        if args.overwrite or not out_file.exists():
            pending.append(clean)

    if args.limit > 0:
        pending = pending[:args.limit]

    print(f"[Total Noun DB] Found {len(all_nouns)} nouns ({sum(1 for v in all_nouns.values() if v['is_concrete'])} concrete).")
    print(f"[Target Queue] Targets: {len(targets)} | Pending to generate: {len(pending)}")

    if args.dry_run:
        print("[Dry Run] First 20 pending words:")
        print(", ".join(pending[:20]))
        return

    if not pending:
        print("[Done] All requested word images already exist.")
        update_manifest()
        return

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
        pipe = AutoPipelineForText2Image.from_pretrained(
            local_path,
            torch_dtype=torch.float16,
            variant="fp16",
            local_files_only=True,
        )
        pipe.to("cuda")
        # Optimization for tight 8GB VRAM
        pipe.enable_attention_slicing()
        guidance_scale = 0.0
        steps = args.steps if args.steps else 1
    else:
        from diffusers import StableDiffusionXLPipeline, UNet2DConditionModel, EulerDiscreteScheduler
        from huggingface_hub import hf_hub_download
        base_path = get_local_model_path("stabilityai/stable-diffusion-xl-base-1.0")
        repo_id = "ByteDance/SDXL-Lightning"
        ckpt = "sdxl_lightning_4step_lora.safetensors"
        print(f"[Pipeline] Loading base from local path: {base_path}", flush=True)
        pipe = StableDiffusionXLPipeline.from_pretrained(
            base_path,
            torch_dtype=torch.float16,
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
        prompt = build_prompt(clean, args.style)
        out_file = OUTPUT_DIR / f"{clean}.webp"
        print(f"[{idx}/{len(pending)}] Generating '{clean}'...")

        try:
            generator = torch.Generator("cuda").manual_seed(42 + hash(clean) % 100000)
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
            # Downscale to crisp 256x256 WebP
            img_256 = raw_img.resize((256, 256), Image.Resampling.LANCZOS)
            img_256.save(out_file, "WEBP", quality=85, method=6)
        except Exception as e:
            print(f"[FAIL] Error generating '{clean}': {e}", flush=True)

        if idx % 25 == 0:
            update_manifest()
            print(f"[Progress] {idx}/{len(pending)} completed ({idx*100//len(pending)}%).", flush=True)

    print("[Complete] Finished generating images.", flush=True)
    update_manifest()

if __name__ == "__main__":
    main()
