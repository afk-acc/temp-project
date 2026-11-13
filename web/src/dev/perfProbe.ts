/**
 * Замеры производительности 3D-демо — только в dev (`window.__perf`), в сборку не попадает.
 *
 *   await __perf.measure(['building', 'floor', 'walk', 'night', 'rain', 'snow', 'parking'])
 *   await __perf.leaks(5)      // вход/выход из квартиры и смена стиля: рост геометрий и текстур
 *
 * Время кадра — пропускная способность: N кадров подряд вызовом цикла движка, затем синхронизация
 * с видеокартой (readPixels); берётся минимум из нескольких серий — так меньше шум от соседних окон.
 * FPS — реальные кадры requestAnimationFrame за 1,5 с (упирается в частоту экрана).
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

type Scn = 'building' | 'floor' | 'walk' | 'walkNight' | 'night' | 'rain' | 'snow' | 'parking'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function app(): any {
  return (document.querySelector('#app') as any).__vue_app__._instance.setupState
}
function eng(): any {
  return (window as any).__engine
}

function settle() {
  const e = eng()
  for (let i = 0; i < 3; i++) {
    if (e.tween) e.tween.t = 0.999
    Object.assign(e.atmo, e.atmoTarget)
    e.loop()
  }
}

/** время кадра, мс: минимум из rounds серий по n кадров */
function frameMs(rounds = 3, n = 15, pr?: number): number {
  const e = eng()
  const r = e.renderer
  const gl = r.getContext() as WebGL2RenderingContext
  if (pr) {
    r.setPixelRatio(pr)
    e.resize()
  }
  const px = new Uint8Array(4)
  const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px)
  for (let i = 0; i < 10; i++) e.loop()
  sync()
  let best = Infinity
  for (let k = 0; k < rounds; k++) {
    const a = performance.now()
    for (let i = 0; i < n; i++) e.loop()
    sync()
    best = Math.min(best, (performance.now() - a) / n)
  }
  return +best.toFixed(2)
}

async function fps(ms = 1500): Promise<number> {
  let n = 0
  let run = true
  const f = () => {
    n++
    if (run) requestAnimationFrame(f)
  }
  requestAnimationFrame(f)
  await sleep(ms)
  run = false
  return Math.round((n * 1000) / ms)
}

/** calls/tris — обычный кадр (тени из кеша, если движок их кеширует), callsSh/trisSh — кадр с перерисовкой теней */
function info() {
  const e = eng()
  const r = e.renderer
  r.info.autoReset = false
  const frame = (shadow: boolean) => {
    if ('shadowAt' in e) {
      e.shadowAt = performance.now()
      e.shadowDirty = shadow
    }
    r.info.reset()
    e.loop()
    return [r.info.render.calls, r.info.render.triangles]
  }
  const [calls, tris] = frame(false)
  const [callsSh, trisSh] = frame(true)
  const out = { calls, tris, callsSh, trisSh, geo: r.info.memory.geometries, tex: r.info.memory.textures, prog: r.info.programs.length }
  r.info.autoReset = true
  return out
}

async function scn(name: Scn): Promise<string> {
  const A = app()
  const s = A.state
  const tick = () => sleep(60)
  s.sun.hour = name === 'night' || name === 'walkNight' ? 22 : 15
  s.atmo.weather = name === 'rain' ? 'rain' : name === 'snow' ? 'snow' : 'clear'
  A.toBuilding()
  await tick()
  const massing = A.isMassing
  const blockId = massing ? A.data.project.value.building.blocks[0].id : null
  if (name === 'floor' || name === 'walk' || name === 'walkNight') {
    if (massing) {
      A.selectBlock(blockId)
      await tick()
      await A.selectFloor(5)
    } else A.selectFloor(10)
    await tick()
  }
  if (name === 'walk' || name === 'walkNight') {
    const units = A.data.units.value.filter((u: any) => u.polygon && u.floor === (massing ? 5 : 10) && (!massing || u.block === blockId))
    const u = [...units].sort((a: any, b: any) => (b.rooms ?? 0) - (a.rooms ?? 0) || b.area - a.area)[0]
    if (!u) return 'no unit'
    A.selectUnit(u.id)
    await tick()
    A.startWalk()
  }
  if (name === 'parking') {
    if (!A.hasParking) return 'no parking'
    A.openParking()
  }
  await tick()
  await tick()
  settle()
  return eng().currentMode
}

async function measure(names: Scn[], prs = [1, 2]) {
  const out: Record<string, unknown> = {}
  // адаптивное разрешение на время замера выключено — меряем на заданном pixelRatio
  const q = eng().quality
  const qMode = q?.mode
  if (q) q.mode = 'high'
  for (const n of names) {
    const m = await scn(n)
    if (m.startsWith('no ')) {
      out[n] = m
      continue
    }
    const row: Record<string, number> = {}
    for (const p of prs) {
      row[`ms@${p}`] = frameMs(3, 15, p)
      await sleep(250)
      row[`fps@${p}`] = await fps()
    }
    out[n] = { ...row, ...info() }
  }
  if (q) q.mode = qMode
  eng().renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  eng().resize()
  return out
}

/** Утечки: k раз вход в квартиру → смена стиля ×2 → выход; рост ресурсов видеокарты */
async function leaks(k = 4) {
  const A = app()
  const e = eng()
  await scn('walk')
  A.exitWalk()
  await sleep(80)
  settle()
  const before = info()
  const heap0 = (performance as any).memory?.usedJSHeapSize ?? 0
  for (let i = 0; i < k; i++) {
    await scn('walk')
    for (const st of ['loft', 'neoclassic', 'none', 'scandi']) {
      A.state.interior = st
      e.setInteriorStyle(st)
      settle()
    }
    A.exitWalk()
    await sleep(80)
    settle()
    if (A.hasParking) {
      A.openParking()
      await sleep(80)
      settle()
      A.toBuilding()
      await sleep(80)
      settle()
    }
  }
  const after = info()
  const heap1 = (performance as any).memory?.usedJSHeapSize ?? 0
  return { before, after, dGeo: after.geo - before.geo, dTex: after.tex - before.tex, dProg: after.prog - before.prog, heapMB: +((heap1 - heap0) / 1e6).toFixed(1) }
}

/** Время расчёта часов солнца для выбранной квартиры, мс */
function sunMs(day = '2026-06-21') {
  const A = app()
  const e = eng()
  if (!A.facades?.length) return null
  const t = performance.now()
  const r = e.sunMinutes(A.facades, 30, day, A.data.project.value.building.azimuth_deg)
  return { ms: Math.round(performance.now() - t), minutes: r.minutes }
}

/** Кадр для сверки снимками: сценарий без автоповорота камеры, pixelRatio 1, отрисовка вручную */
async function snap(name: Scn) {
  const m = await scn(name)
  const e = eng()
  e.controls.autoRotate = false
  e.renderer.setPixelRatio(1)
  e.resize()
  for (let i = 0; i < 30; i++) e.loop()
  return m
}

const perf: Record<string, unknown> = { scn, measure, frameMs, fps, info, leaks, sunMs, settle, snap }
;(window as any).__perf = perf

// время до первого кадра с домом: от начала навигации до кадра, в котором в сцене уже есть здание
const t0 = setInterval(() => {
  const e = eng()
  if (!e || !(e.building || e.massing)) return
  const f0 = e.renderer.info.render.frame
  const wait = () => (e.renderer.info.render.frame > f0 ? (perf.firstFrameMs = Math.round(performance.now())) : requestAnimationFrame(wait))
  clearInterval(t0)
  wait()
}, 5)

export {}
