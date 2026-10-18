import fitz
import json
import re

doc = fitz.open("英文單字 7000_ + 例如.pdf")
words = []

for page_num, page in enumerate(doc):
    tables = page.find_tables()
    for table in tables:
        # extract table as a list of lists of strings
        data = table.extract()
        for row in data:
            if not row or len(row) < 3:
                continue
            
            col1 = row[0]
            col2 = row[1]
            col3 = row[2]
            
            if not col1 or not col2 or not col3:
                continue
            
            # Skip header
            if "英文單字" in col1 or "詞彙及IPA音標" in col1:
                continue
                
            # Parse col1: Word, Phonetic, POS
            # e.g., "abandon\n/əˈbændən/ (v.)"
            # or "ability /əˈbɪləti/ (n.)"
            
            # clean up newlines
            c1 = col1.replace('\n', ' ').strip()
            c2 = col2.replace('\n', '').strip()
            c3 = col3.replace('\n', ' ').strip()
            
            # Extract word and kk
            en = ""
            kk = ""
            m1 = re.match(r'^([a-zA-Z-]+)\s*(/[^/]+/)?', c1)
            if m1:
                en = m1.group(1).strip()
                if m1.group(2):
                    kk = m1.group(2).strip()
            else:
                # fallback
                en = c1.split()[0]
                
            # Extract example and exampleZh
            example = ""
            exampleZh = ""
            m3 = re.match(r'^(.*?)\((.*?)\)$', c3)
            if m3:
                example = m3.group(1).strip()
                exampleZh = m3.group(2).strip()
            else:
                example = c3
                
            words.append({
                "en": en,
                "kk": kk,
                "zh": c2,
                "example": example,
                "exampleZh": exampleZh
            })

with open("extracted_7000.json", "w", encoding="utf-8") as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(words)} words from 7000 PDF.")
