import fitz
import json
import re

doc = fitz.open("全新制多益TOEIC必考單字3000.pdf")
words = []

# Pattern: match lines like: "1. abandon v 拋棄；遺棄"
# or maybe "120. advise v 勸告；忠告"
# We can just look for numbers followed by a dot, then word, then part of speech (v, n, a, ad, prep, conj), then meaning.
pattern = re.compile(r'^\s*(\d+)\.\s+([a-zA-Z-]+)\s+([a-z]+)\s+(.*)$')

for page in doc:
    text = page.get_text("text")
    lines = text.split('\n')
    
    current_word = None
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        m = pattern.match(line)
        if m:
            if current_word:
                words.append(current_word)
            idx = int(m.group(1))
            en = m.group(2)
            pos = m.group(3)
            zh = m.group(4)
            current_word = {"en": en, "zh": f"{pos}. {zh}"}
        else:
            # might be continuation of previous line or garbage
            if current_word and line and not line.startswith("===") and len(line) < 30:
                current_word["zh"] += line

    if current_word:
        words.append(current_word)

with open("extracted_3000.json", "w", encoding="utf-8") as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(words)} words.")
