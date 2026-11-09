"""Масштаб чертежа квартиры по подписям площадей: заливка комнаты вокруг подписи в пределах чёрных стен.

Стены — крупные чёрные компоненты (текст и значки отсеиваются по размеру), дверные проёмы закрываются
морфологией. Площадь комнаты в пикселях против площади из подписи → м/пиксель; берётся медиана по комнатам.
"""
from __future__ import annotations

import math
import statistics

import numpy as np

import planlib as pl


def scale_from_labels(gray_crop: np.ndarray, labels: list[tuple[float, float, float]], k: int = 2) -> tuple[float | None, list[float]]:
    """gray_crop — яркость (0..255) вырезки; labels — (x, y, м²) в пикселях вырезки. k — прореживание."""
    small = gray_crop[::k, ::k]
    black = small < 60
    lab, sizes = pl.components(black)
    big = np.zeros_like(black)
    keep = [i for i, n in enumerate(sizes) if i and n >= 600 // (k * k)]
    if keep:
        big = np.isin(lab, keep)
    walls = pl.close_axis(big, 48 // k)           # проёмы до ~1 м
    free = ~walls
    out = []
    for x, y, m2 in labels:
        cx, cy = int(x / k), int(y / k)
        # стартовая точка: ближайшая свободная клетка над подписью (сама подпись — чёрный текст)
        seed = None
        for dy in range(0, 40 // k):
            for yy in (cy - dy, cy + dy):
                if 0 <= yy < free.shape[0] and 0 <= cx < free.shape[1] and free[yy, cx]:
                    seed = (yy, cx)
                    break
            if seed:
                break
        if not seed:
            continue
        reg = pl.flood(free, [seed])
        px = int(reg.sum())
        if px < 50 or reg[0, :].any() or reg[-1, :].any() or reg[:, 0].any() or reg[:, -1].any():
            continue   # утекло наружу — подпись вне замкнутой комнаты
        out.append(math.sqrt(m2 / (px * k * k)))
    if len(out) < 2:
        return None, out
    return statistics.median(out), out
