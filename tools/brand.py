"""Логотип Spliti: знак + надпись, собранные из геометрии (без шрифтов) → brand/*.svg и превью-лист.

Идея: Spliti = split (разрез этажа) + σπίτι (дом). Знак — силуэт дома, разрезанный на этажи;
средний этаж выдвинут и подсвечен медью — «выбранный этаж», как в продукте.
Надпись — моноширинные штрихи, строгая геометрия; точка последней «i» — медный квадрат.
Запуск: python3 -I tools/brand.py
"""
from __future__ import annotations

import math
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'brand')

INK = '#14161A'       # графит
PAPER = '#F1ECE3'     # тёплая бумага
COPPER = '#C98A5B'    # медь на светлом
COPPER_D = '#D9A06E'  # медь на тёмном

# ---------- знак: дом, разрезанный на этажи ----------

def mark_parts(gap: float = 3.0, shift: float = 8.0):
    """Три части в сетке 64×64: дом с крышей (пятиугольник), выдвинутый этаж, нижний этаж."""
    x0, x1, apex, eave, base = 11.0, 53.0, 5.0, 24.0, 59.0
    c1 = 38.5             # первый разрез: над ним — дом с крышей и стенами
    c2 = 49.0             # второй разрез
    top = f'M{x0},{c1 - gap / 2} L{x0},{eave} L{(x0 + x1) / 2},{apex} L{x1},{eave} L{x1},{c1 - gap / 2} Z'
    mid = (x0 + shift, c1 + gap / 2, x1 + shift, c2 - gap / 2)
    low = (x0, c2 + gap / 2, x1, base)
    return top, mid, low


def mark_svg(fg: str, accent: str, bg: str | None = None, size: int = 64, rx: float = 0) -> str:
    top, (ax, ay, bx, by), (cx, cy, dx, dy) = mark_parts()
    back = f'<rect width="64" height="64" rx="{rx}" fill="{bg}"/>' if bg else ''
    # знак чуть сдвинут влево, чтобы выдвинутый этаж не упирался в край
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="{size}" height="{size}">{back}'
            f'<g transform="translate(-3.5 0)"><path d="{top}" fill="{fg}"/>'
            f'<rect x="{ax}" y="{ay}" width="{bx - ax}" height="{by - ay}" fill="{accent}"/>'
            f'<rect x="{cx}" y="{cy}" width="{dx - cx}" height="{dy - cy}" fill="{fg}"/></g></svg>')

# ---------- надпись spliti: штрихи одной толщины ----------

S = 8.0                    # толщина штриха
XT, BASE = 22.0, 70.0      # верх строчных и базовая линия
ASC, DESC = 4.0, 88.0      # верх «l» и низ «p»


def ell(cx, cy, rx, ry, a):
    t = math.radians(a)
    return cx + rx * math.cos(t), cy + ry * math.sin(t)


def wordmark_paths():
    """Возвращает (штрихи-пути, квадраты точек, ширина). Углы — экранные (y вниз)."""
    paths, dots = [], []
    h = S / 2
    # s: две полуэллипса, касательные в середине
    sx, rx = 0.0, 13.0
    top_c, bot_c, ry = (sx + h + rx, XT + h + 10.0), (sx + h + rx, BASE - h - 10.0), 10.0
    p0 = ell(*top_c, rx, ry, -18)
    pm = (top_c[0], top_c[1] + ry)
    p1 = ell(*bot_c, rx, ry, 162)
    paths.append(f'M{p0[0]:.2f},{p0[1]:.2f} A{rx},{ry} 0 1 0 {pm[0]:.2f},{pm[1]:.2f} A{rx},{ry} 0 1 1 {p1[0]:.2f},{p1[1]:.2f}')
    s_right = sx + 2 * rx + S
    # p: ствол до выносного элемента + овал
    px = s_right + 9 + h
    paths.append(f'M{px},{XT} L{px},{DESC}')
    brx, bry = 17.0, (BASE - XT - S) / 2
    bcx, bcy = px + brx, (XT + BASE) / 2
    paths.append(f'M{bcx - brx},{bcy} A{brx},{bry} 0 1 1 {bcx + brx},{bcy} A{brx},{bry} 0 1 1 {bcx - brx},{bcy} Z')
    p_right = bcx + brx + h
    # l
    lx = p_right + 11 + h
    paths.append(f'M{lx},{ASC} L{lx},{BASE}')
    # i
    ix = lx + S + 12
    paths.append(f'M{ix},{XT} L{ix},{BASE}')
    dots.append((ix - h, 7.0, S, S, False))
    # t: ствол и перекладина
    tx = ix + 22
    paths.append(f'M{tx},{XT - 12} L{tx},{BASE}')
    paths.append(f'M{tx - 9},{XT + h} L{tx + 11},{XT + h}')
    # i (точка медная)
    i2 = tx + 11 + 8 + h
    paths.append(f'M{i2},{XT} L{i2},{BASE}')
    dots.append((i2 - h, 7.0, S, S, True))
    return paths, dots, i2 + h


def wordmark_group(fg: str, accent: str) -> tuple[str, float]:
    paths, dots, width = wordmark_paths()
    body = ''.join(f'<path d="{d}"/>' for d in paths)
    sq = ''.join(f'<rect x="{x:.2f}" y="{y}" width="{w}" height="{hh}" fill="{accent if hot else fg}"/>' for x, y, w, hh, hot in dots)
    return (f'<g fill="none" stroke="{fg}" stroke-width="{S}" stroke-linecap="butt" stroke-linejoin="miter">{body}</g>{sq}', width)


def lockup_svg(fg: str, accent: str, bg: str | None = None) -> str:
    """Знак слева, надпись справа; высота строки = высота знака."""
    word, ww = wordmark_group(fg, accent)
    top, (ax, ay, bx, by), (cx, cy, dx, dy) = mark_parts()
    k = 92 / 64           # знак в высоту 92 (от верха «l» до низа «p»)
    gap = 26
    W = 64 * k - 3.5 * k + gap + ww + 4
    back = f'<rect width="{W:.1f}" height="92" fill="{bg}"/>' if bg else ''
    mark = (f'<g transform="translate({-3.5 * k:.2f} 0) scale({k:.4f})"><path d="{top}" fill="{fg}"/>'
            f'<rect x="{ax}" y="{ay}" width="{bx - ax}" height="{by - ay}" fill="{accent}"/>'
            f'<rect x="{cx}" y="{cy}" width="{dx - cx}" height="{dy - cy}" fill="{fg}"/></g>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} 92" height="92">{back}{mark}'
            f'<g transform="translate({64 * k - 3.5 * k + gap:.1f} 2)">{word}</g></svg>')


def wordmark_svg(fg: str, accent: str) -> str:
    word, ww = wordmark_group(fg, accent)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 {ww + 4:.1f} 92" height="92">{word}</svg>'


def main():
    os.makedirs(OUT, exist_ok=True)
    files = {
        'spliti-mark.svg': mark_svg(INK, COPPER),
        'spliti-mark-on-dark.svg': mark_svg(PAPER, COPPER_D),
        'spliti-logo.svg': lockup_svg(INK, COPPER),
        'spliti-logo-on-dark.svg': lockup_svg(PAPER, COPPER_D),
        'spliti-wordmark.svg': wordmark_svg(INK, COPPER),
        'spliti-wordmark-on-dark.svg': wordmark_svg(PAPER, COPPER_D),
        'favicon.svg': mark_svg(PAPER, COPPER_D, bg=INK, size=32, rx=14),
    }
    pub = os.path.join(ROOT, 'web', 'public', 'brand')
    os.makedirs(pub, exist_ok=True)
    for name, svg in files.items():
        for d in (OUT, pub):
            with open(os.path.join(d, name), 'w', encoding='utf-8') as f:
                f.write(svg)
    # та же геометрия для Vue-компонентов (знак и надпись рисуются inline и красятся через CSS)
    import json
    top, mid, low = mark_parts()
    paths, dots, width = wordmark_paths()
    ts = ('// Сгенерировано tools/brand.py — не править руками\n'
          f'export const MARK = {json.dumps({"top": top, "mid": mid, "low": low, "dx": -3.5})} as const\n'
          f'export const WORD = {json.dumps({"paths": paths, "dots": [d[:4] + (d[4],) for d in dots], "width": round(width, 2), "stroke": S})} as const\n')
    gen = os.path.join(ROOT, 'web', 'src', 'brand')
    os.makedirs(gen, exist_ok=True)
    with open(os.path.join(gen, 'geometry.ts'), 'w', encoding='utf-8') as f:
        f.write(ts)
    sheet = f'''<!doctype html><meta charset="utf-8"><style>
body{{margin:0;font:14px -apple-system,sans-serif;background:#888}} .r{{display:flex}} .c{{flex:1;padding:48px;display:grid;place-items:center;gap:28px}}
.d{{background:{INK}}} .l{{background:{PAPER}}} img{{display:block}}</style>
<div class="r"><div class="c l"><img src="spliti-logo.svg" height="92"><img src="spliti-mark.svg" width="128"></div>
<div class="c d"><img src="spliti-logo-on-dark.svg" height="92"><img src="spliti-mark-on-dark.svg" width="128"></div></div>
<div class="r"><div class="c l"><img src="spliti-logo.svg" height="28"><div style="display:flex;gap:16px;align-items:center"><img src="favicon.svg" width="16"><img src="favicon.svg" width="32"><img src="favicon.svg" width="64"></div></div>
<div class="c d"><img src="spliti-logo-on-dark.svg" height="28"><img src="spliti-wordmark-on-dark.svg" height="40"></div></div>'''
    with open(os.path.join(OUT, 'sheet.html'), 'w', encoding='utf-8') as f:
        f.write(sheet)
    print('brand/:', ', '.join(files))


if __name__ == '__main__':
    main()
