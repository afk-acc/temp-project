"""Показ 3D-демо без интернета и без бэкенда: раздаёт статическую выгрузку (tools/pack_deploy.py) с ноутбука.

Нужен только Python 3 из коробки (macOS, Linux; на Windows — python.org). Что делает поверх обычного http.server:
  - /api/projects/c1 → /api/projects/c1.json (выгрузка лежит файлами .json, фронт просит без расширения);
  - POST (заявка «Узнать цену») → 405: 3D-сайт сам покажет «так заявка придёт менеджеру», ничего не теряется;
  - неизвестный адрес → index.html (как try_files в Nginx).
Запуск из корня репозитория:
  python3 -I tools/serve_offline.py deploy/offline            # http://localhost:5190/  (только этот ноутбук)
  python3 -I tools/serve_offline.py deploy/offline --lan      # + телефон/ТВ в той же Wi-Fi-сети
"""
from __future__ import annotations

import argparse
import functools
import http.server
import json
import os
import socket
import sys
import urllib.parse


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml',
        '.webp': 'image/webp', '.wasm': 'application/wasm', '.css': 'text/css',
    }

    def _resolve(self) -> None:
        """Подменить self.path на существующий файл выгрузки (до того как http.server станет его искать)."""
        url = urllib.parse.urlsplit(self.path)
        path = urllib.parse.unquote(url.path)
        local = self.translate_path(path)
        if os.path.isfile(local) or (os.path.isdir(local) and os.path.isfile(os.path.join(local, 'index.html'))):
            return
        if path.startswith('/api/') and os.path.isfile(local + '.json'):
            self.path = path + '.json'
        elif not path.startswith(('/api/', '/assets/')) and '.' not in os.path.basename(path):
            self.path = '/index.html'  # адреса страницы без файла — на 3D-сайт

    def do_GET(self) -> None:  # noqa: N802 — имя из http.server
        self._resolve()
        super().do_GET()

    def do_HEAD(self) -> None:  # noqa: N802
        self._resolve()
        super().do_HEAD()

    def list_directory(self, path):  # noqa: ANN001 — список файлов выгрузки посетителю не показываем
        self.send_error(404)

    def _no_backend(self) -> None:
        body = json.dumps({'message': 'Офлайн-показ: бэкенда нет, заявка не сохраняется'}, ensure_ascii=False).encode()
        self.send_response(405)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    do_POST = do_PATCH = do_PUT = do_DELETE = _no_backend  # noqa: N815

    def end_headers(self) -> None:
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:
        if args and str(args[1])[:1] in '45':  # только ошибки — чтобы видно было, если чего-то нет в выгрузке
            sys.stderr.write('%s\n' % (fmt % args))


def lan_ip() -> str | None:
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(('10.255.255.255', 1))  # пакет не уходит: только выбор интерфейса
            return s.getsockname()[0]
    except OSError:
        return None


def main() -> None:
    ap = argparse.ArgumentParser(description='Офлайн-показ 3D-демо Spliti')
    ap.add_argument('dir', help='каталог выгрузки (index.html, assets/, api/)')
    ap.add_argument('--port', type=int, default=5190)
    ap.add_argument('--lan', action='store_true', help='открыть для устройств в той же сети (телефон, ТВ)')
    a = ap.parse_args()
    root = os.path.abspath(a.dir)
    if not os.path.isfile(os.path.join(root, 'index.html')) or not os.path.isdir(os.path.join(root, 'api')):
        sys.exit(f'{root}: нет index.html или api/ — сначала соберите выгрузку (README, «Как показывать демо»)')
    with open(os.path.join(root, 'api', 'projects', 'index.json'), encoding='utf-8') as f:
        slugs = [p['slug'] for p in json.load(f)['items']]
    host = '0.0.0.0' if a.lan else '127.0.0.1'
    server = http.server.ThreadingHTTPServer((host, a.port), functools.partial(Handler, directory=root))
    print(f'Офлайн-демо: http://localhost:{a.port}/  ЖК: {", ".join(slugs)}')
    for s in slugs:
        print(f'  http://localhost:{a.port}/?p={s}&solo')
    if a.lan and (ip := lan_ip()):
        print(f'В сети: http://{ip}:{a.port}/')
    print('Остановить — Ctrl+C')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
