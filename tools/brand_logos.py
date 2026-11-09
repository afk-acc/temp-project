"""Логотипы брендов: очистка SVG, приведение растровых к PNG, реестр «бренд → файл → источник».

Вход:  data-src/brands/raw/*.{svg,png,webp,...} + manifest.json (откуда скачано)
Выход: data-build/brands/<key>.{svg,png} + data-build/brands/index.json
Запуск: python3 -I tools/brand_logos.py

Логотипы — товарные знаки владельцев. Используются как указатели на места рядом (как на картах),
только во внутреннем демо. Перед публичным показом — согласовать с правообладателями.
"""
from __future__ import annotations

import json
import os
import re

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'data-src', 'brands', 'raw')
OUT = os.path.join(ROOT, 'data-build', 'brands')

# бренд → какие названия мест он покрывает (нижний регистр, без апострофов)
MATCH = {
    'korzinka': ['korzinka', 'корзинка'],
    'havas': ['havas', 'хавас'],
    'xalq-banki': ['xalq bank', 'халк банк'],
    'ipak-yoli-banki': ['ipak yoli bank', 'ipak yuli bank', 'ипак йули банк'],
    'kapitalbank': ['kapitalbank', 'kapital bank', 'капитал банк', 'капиталбанк'],
    'evos': ['evos'],
    'oqtepa': ['oqtepa'],
    'yaponamama': ['yaponamama', 'японамама'],
    'uzbekneftegaz': ['uzbekneftegaz', 'узбекнефтегаз'],
    'tok-bor': ['tok bor', 'tokbor'],
    'baraka': ['baraka'],
    'british-school': ['british school', 'британская школа'],
    'kfc': ['kfc'],
    'intersport': ['intersport'],
    'audi': ['audi'],
    'bmw': ['bmw'],
    'chevrolet': ['chevrolet'],
    'tashkent-metro': [],  # подставляется всем станциям метро
}
# выбранный файл, если для бренда скачано несколько вариантов
PREFER = {'yaponamama': 'yaponamama'}

DANGEROUS = [
    (re.compile(r'<script\b.*?</script\s*>', re.S | re.I), ''),
    (re.compile(r'<foreignObject\b.*?</foreignObject\s*>', re.S | re.I), ''),
    (re.compile(r'\son[a-z]+\s*=\s*("[^"]*"|\'[^\']*\')', re.I), ''),
    (re.compile(r'(?:xlink:)?href\s*=\s*("|\')\s*(?:javascript:|https?:|//)[^"\']*\1', re.I), ''),
]


def clean_svg(text: str) -> str:
    for rx, rep in DANGEROUS:
        text = rx.sub(rep, text)
    # убираем пролог/комментарии до <svg, чтобы файл начинался с корня
    i = text.lower().find('<svg')
    return text[i:] if i >= 0 else text


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(RAW, 'manifest.json'), encoding='utf-8') as f:
        manifest = json.load(f)
    index = {}
    for key, patterns in MATCH.items():
        raw_key = PREFER.get(key, key)
        m = manifest.get(raw_key)
        if not m:
            print(f'{key:16s} — нет файла')
            continue
        src = os.path.join(RAW, m['file'])
        ext = m['file'].rsplit('.', 1)[1]
        if ext == 'svg':
            with open(src, encoding='utf-8', errors='ignore') as f:
                svg = clean_svg(f.read())
            name = f'{key}.svg'
            with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
                f.write(svg)
        else:
            im = Image.open(src)
            im = im.convert('RGBA')
            im.thumbnail((256, 256), Image.LANCZOS)
            name = f'{key}.png'
            im.save(os.path.join(OUT, name), optimize=True)
        index[key] = {'file': name, 'match': patterns, 'source': m['source'], 'url': m['url'], 'downloaded': m['downloaded']}
        print(f'{key:16s} → {name}')
    with open(os.path.join(OUT, 'index.json'), 'w', encoding='utf-8') as f:
        json.dump({'note': 'Товарные знаки правообладателей; только внутреннее демо', 'items': index}, f, ensure_ascii=False, indent=1)


def logo_for(name: str, category: str, index: dict) -> str | None:
    """Ключ логотипа для места по его названию."""
    if category == 'metro' and 'tashkent-metro' in index:
        return 'tashkent-metro'
    n = name.lower().replace('ʻ', '').replace("'", '').replace('’', '').replace('ʼ', '')
    for key, item in index.items():
        if any(p in n for p in item['match']):
            return key
    return None


if __name__ == '__main__':
    main()
