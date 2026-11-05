"""Совмещение планов разных этажей по лифтовому ядру.

Ядро одинаково на всех этажах, поэтому его фрагмент с типового этажа A служит шаблоном.
Для каждого плана перебираются масштабы, на каждом — нормированная корреляция (FFT);
лучшее совпадение даёт м/пиксель и центр ядра в пикселях.

Запуск: python3 -I tools/register.py  → data-src/registration.json
"""
from __future__ import annotations

import glob
import json
import os
import sys

import numpy as np

sys.path.insert(0, os.path.dirname(__file__))
import planlib as pl  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLANS = os.path.join(ROOT, 'data-src', 'plans')
REF = '66bf315386a3b'               # типовой этаж A
REF_M_PER_PX = 0.00739              # масштаб A по площадям квартир каталога (см. plan-00, Ф1)
REF_CORE_BOX_PX = (1116, 1399, 3036, 2753)  # x0, y0, x1, y1 — ядро на плане A
CELL = 0.10


def main() -> None:
    ref = pl.wall_mask(pl.load_rgba(os.path.join(PLANS, f'L_{REF}.png')))
    g_ref = pl.mask_to_cells(ref, REF_M_PER_PX, CELL)
    k = REF_M_PER_PX / CELL
    x0, y0, x1, y1 = (int(v * k) for v in REF_CORE_BOX_PX)
    tmpl = g_ref[y0:y1, x0:x1]

    out = {}
    for path in sorted(glob.glob(os.path.join(PLANS, 'L_*.png'))):
        name = os.path.basename(path)[2:-4]
        walls = pl.wall_mask(pl.load_rgba(path))
        best = (-1.0, 0.0, 0, 0)
        for s in np.geomspace(0.0050, 0.0160, 60):
            r = pl.ncc_match(pl.mask_to_cells(walls, s, CELL), tmpl)
            if r[0] > best[0]:
                best = (r[0], float(s), r[1], r[2])
        for s in np.linspace(best[1] * 0.97, best[1] * 1.03, 13):
            r = pl.ncc_match(pl.mask_to_cells(walls, s, CELL), tmpl)
            if r[0] > best[0]:
                best = (r[0], float(s), r[1], r[2])
        score, s, ty, tx = best
        cx = (tx + tmpl.shape[1] / 2) * CELL / s
        cy = (ty + tmpl.shape[0] / 2) * CELL / s
        if name == REF:
            s = REF_M_PER_PX
        out[name] = {'score': round(score, 3), 'm_per_px': round(s, 6), 'core_px': [round(cx, 1), round(cy, 1)]}
        print(name, out[name])
    with open(os.path.join(ROOT, 'data-src', 'registration.json'), 'w') as f:
        json.dump(out, f, indent=1)


if __name__ == '__main__':
    main()
