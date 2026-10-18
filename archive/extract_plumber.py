import pdfplumber
import json
import re

words = []

with pdfplumber.open("英文單字 7000_ + 例如.pdf") as pdf:
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            for row in table:
                if not row or len(row) < 3:
                    continue
                
                col1 = row[0]
                col2 = row[1]
                col3 = row[2]
                
                if not col1 or not col2 or not col3:
                    continue
                
                if "英文單字" in col1 or "詞彙及IPA音標" in col1:
                    continue
                
                c1 = col1.replace('\n', ' ').strip()
                c2 = col2.replace('\n', '').strip()
                c3 = col3.replace('\n', ' ').strip()
                
                en = ""
                kk = ""
                m1 = re.match(r'^([a-zA-Z-]+)\s*(/[^/]+/)?', c1)
                if m1:
                    en = m1.group(1).strip()
                    if m1.group(2):
                        kk = m1.group(2).strip()
                else:
                    en = c1.split()[0]
                    
                example = ""
                exampleZh = ""
                # "The child hid behind her mother. (害羞的孩子躲在媽媽後面。)"
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

with open("extracted_7000_plumber.json", "w", encoding="utf-8") as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(words)} words using pdfplumber.")
