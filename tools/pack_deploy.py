"""Пакет статической выкладки демо: фронт (собран отдельно) + выгрузка публичного API из базы бэкенда.

Данные берутся из базы (php artisan zhk:export), а не из файлов конвейера: статусы и цены — как в CRM на момент выгрузки.
C1 (планы Murad Buildings) и Harizma (каталог Golden House) не выкладываются без согласия застройщика — по умолчанию только NRG.
CRM и сайт Spliti в пакет демо не идут: CRM нужен бэкенд, сайт выкладывается отдельно.
Запуск из корня 3d-zhk:
  (cd web && ONLY=main npx vite build --base /nrg-bi/ --outDir ../deploy/nrg-bi --emptyOutDir)
  python3 -I tools/pack_deploy.py deploy/nrg-bi nrg-mirzo-ulugbek
Офлайн-показ с ноутбука (без интернета и бэкенда) — сборка с относительной базой и локальный сервер:
  (cd web && ONLY=main npx vite build --base ./ --outDir ../deploy/offline --emptyOutDir)
  python3 -I tools/pack_deploy.py deploy/offline nrg-mirzo-ulugbek     # C1/Harizma — только на встречу с их застройщиком
  python3 -I tools/serve_offline.py deploy/offline
Бэкенд с базой и картинками в другом каталоге (например, из git worktree): BACKEND_DIR=/путь/к/backend python3 -I tools/pack_deploy.py …
"""
from __future__ import annotations

import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND = os.environ.get('BACKEND_DIR') or os.path.join(ROOT, 'backend')


def main(out: str, slugs: list[str]) -> None:
    target = os.path.join(ROOT, out)
    assets = os.path.join(target, 'assets')
    extra = [f'assets/{f}' for f in os.listdir(assets) if f.startswith(('crm-', 'site-'))] if os.path.isdir(assets) else []
    # 3D-страница собирается в demo/index.html — в пакете демо она становится корнем
    demo = os.path.join(target, 'demo', 'index.html')
    if os.path.exists(demo):
        with open(demo, encoding='utf-8') as f:
            html = f.read()
        # сборка с --base ./ пишет пути от demo/ («../assets/…») — в корне пакета они становятся «./assets/…»
        html = html.replace('="../', '="./')
        with open(os.path.join(target, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(html)
        os.remove(demo)
        os.rmdir(os.path.join(target, 'demo'))
    for name in ['crm/index.html'] + extra:
        path = os.path.join(target, name)
        if os.path.exists(path):
            os.remove(path)
    if os.path.isdir(os.path.join(target, 'crm')):
        os.rmdir(os.path.join(target, 'crm'))
    subprocess.run(['php', 'artisan', 'zhk:export', *slugs, f'--to={os.path.join(target, "api")}'], cwd=BACKEND, check=True)
    total = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(target) for f in fs)
    files = sum(len(fs) for _, _, fs in os.walk(target))
    print(f'{out}: {files} файлов, {total / 1024:.0f} КБ; проекты: {", ".join(slugs)}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2:] or ['nrg-mirzo-ulugbek'])
