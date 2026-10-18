import fitz
import json

doc = fitz.open("英文單字 7000_ + 例如.pdf")
all_blocks = []

for page_num in range(min(5, len(doc))):  # just first 5 pages for testing
    page = doc[page_num]
    blocks = page.get_text("blocks")
    for b in blocks:
        # b[4] is the text content
        text = b[4].strip()
        if text:
            all_blocks.append(text)

with open("test_blocks.json", "w", encoding="utf-8") as f:
    json.dump(all_blocks, f, ensure_ascii=False, indent=2)
