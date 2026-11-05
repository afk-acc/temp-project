"""Пакет статической выкладки: фронт (собран отдельно) + ответы API файлами, только выбранные проекты.

C1 (планы Murad Buildings) не выкладывается без согласия застройщика — в пакет по умолчанию идёт только NRG.
Запуск из корня 3d-zhk:
  (cd web && npx vite build --base /nrg-bi/ --outDir ../deploy/nrg-bi --emptyOutDir)
  python3 -I tools/pack_deploy.py deploy/nrg-bi nrg-mirzo-ulugbek
"""
from __future__ import annotations

import json
import os
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STUB = os.path.join(ROOT, 'api-stub')


def main(out: str, slugs: list[str]) -> None:
    api = os.path.join(ROOT, out, 'api')
    if os.path.exists(api):
        shutil.rmtree(api)
    os.makedirs(os.path.join(api, 'projects'))
    with open(os.path.join(STUB, 'projects', 'index.json'), encoding='utf-8') as f:
        index = json.load(f)
    index['items'] = [p for p in index['items'] if p['slug'] in slugs]
    with open(os.path.join(api, 'projects', 'index.json'), 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, separators=(',', ':'))
    for slug in slugs:
        shutil.copy(os.path.join(STUB, 'projects', f'{slug}.json'), os.path.join(api, 'projects', f'{slug}.json'))
        shutil.copytree(os.path.join(STUB, 'projects', slug), os.path.join(api, 'projects', slug))
    shutil.copytree(os.path.join(STUB, 'brands'), os.path.join(api, 'brands'))
    total = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(os.path.join(ROOT, out)) for f in fs)
    files = sum(len(fs) for _, _, fs in os.walk(os.path.join(ROOT, out)))
    print(f'{out}: {files} файлов, {total / 1024:.0f} КБ; проекты: {", ".join(slugs)}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2:] or ['nrg-mirzo-ulugbek'])
