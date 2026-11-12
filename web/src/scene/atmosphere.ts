import * as THREE from 'three'
import type { Context, Point } from '@/domain/types'

/**
 * Атмосфера сцены: снег и мокрый асфальт на материалах, свет в окнах, осадки, облака, звёзды, фонари.
 *
 * Всё считается шейдерами на видеокарте: общие uniform-ы меняются раз в кадр, геометрия не пересобирается.
 * Материалы патчатся через onBeforeCompile — стандартное PBR-освещение three.js остаётся как есть,
 * к нему подмешиваются снег (по нормали вверх), влажность (темнее и глянцевее) и свечение окон.
 */
export const atmoUniforms = {
  /** снежный покров 0…1 */
  uSnow: { value: 0 },
  /** мокрые поверхности 0…1 */
  uWet: { value: 0 },
  /** освещение включено (сумерки/ночь/пасмурно) 0…1 */
  uNight: { value: 0 },
  /** доля окон со светом 0…1 */
  uLit: { value: 0 },
  uTime: { value: 0 },
}

const NOISE = /* glsl */ `
float atmoHash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float atmoNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(atmoHash(i), atmoHash(i + vec2(1.0, 0.0)), f.x),
             mix(atmoHash(i + vec2(0.0, 1.0)), atmoHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`

export interface WeatherOpts {
  /** сколько снега ложится на горизонтальные поверхности материала (дороги чистят — меньше) */
  snow?: number
  /** насколько материал темнеет и блестит под дождём */
  wet?: number
  /** свет в окнах: 'glass' — остекление дома по этажам, 'context' — сетка окон на окружающих домах */
  windows?: 'glass' | 'context'
  /** ночная архитектурная подсветка: тёплый свет снизу на фасаде */
  uplight?: boolean
}

const f = (x: number) => x.toFixed(3)

export function weatherize<T extends THREE.MeshStandardMaterial>(m: T, o: WeatherOpts): T {
  const snow = o.snow ?? 0
  const wet = o.wet ?? 0
  const key = `atmo-${f(snow)}-${f(wet)}-${o.windows ?? ''}-${o.uplight ? 'u' : ''}`
  m.customProgramCacheKey = () => key
  m.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, atmoUniforms)
    const glassWin = o.windows === 'glass'
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
varying vec3 vAtmoW;
${glassWin ? 'attribute float aLevel;\nvarying vec3 vAtmoM;\nvarying vec3 vAtmoMN;\nvarying float vAtmoLvl;' : ''}`)
      .replace('#include <project_vertex>', `#include <project_vertex>
vec4 atmoP = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  atmoP = instanceMatrix * atmoP;
#endif
vAtmoW = (modelMatrix * atmoP).xyz;
${glassWin ? 'vAtmoM = position; vAtmoMN = normal; vAtmoLvl = aLevel * 7.0 + floor(modelMatrix[3].y * 2.0);' : ''}`)

    let surface = `
vec3 atmoN = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
float atmoUp = clamp(atmoN.y, 0.0, 1.0);
vec3 atmoEm = vec3(0.0);
`
    if (wet > 0) {
      surface += `
{
  float w = uWet * ${f(wet)};
  float puddle = smoothstep(0.5, 0.78, atmoNoise(vAtmoW.xz * 0.11)) * smoothstep(0.6, 0.95, atmoUp);
  diffuseColor.rgb *= 1.0 - 0.42 * w;
  roughnessFactor = mix(roughnessFactor, 0.06, w * clamp(0.5 * atmoUp + 0.5 * puddle, 0.0, 1.0));
  metalnessFactor = mix(metalnessFactor, max(metalnessFactor, 0.15), w * puddle);
}`
    }
    if (snow > 0) {
      surface += `
{
  float n = atmoNoise(vAtmoW.xz * 0.35) * 0.6 + atmoNoise(vAtmoW.xz * 2.1) * 0.4;
  float cover = uSnow * ${f(snow)};
  float s = smoothstep(0.42, 0.8, atmoUp) * clamp(cover * (0.72 + 0.6 * n), 0.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.93, 0.97), s);
  roughnessFactor = mix(roughnessFactor, 0.8, s);
  metalnessFactor = mix(metalnessFactor, 0.0, s);
}`
    }
    if (o.uplight) {
      surface += `
{
  float vert = 1.0 - abs(atmoN.y);
  atmoEm += vec3(1.0, 0.74, 0.5) * uNight * vert * (0.16 * exp(-vAtmoW.y / 9.0) + 0.012);
}`
    }
    if (o.windows === 'glass') {
      // остекление: ячейка = этаж × простенок ~1,55 м вдоль фасада; свет тёплый/нейтральный, изредка холодный (телевизор, LED)
      surface += `
{
  vec2 t = normalize(vec2(-vAtmoMN.z, vAtmoMN.x) + 1e-5);
  float along = dot(vAtmoM.xz, t) / 1.55;
  float cell = floor(along);
  float h = atmoHash(vec2(cell * 1.31 + vAtmoLvl * 0.17, vAtmoLvl * 3.7 + 11.0));
  float h2 = atmoHash(vec2(cell + 17.0, vAtmoLvl * 1.3 + 5.0));
  float lit = step(h, uLit);
  vec3 c = mix(vec3(1.0, 0.56, 0.24), vec3(1.0, 0.82, 0.58), h2);
  c = mix(c, vec3(0.62, 0.78, 1.0), step(0.9, h2));
  float fr = fract(along);
  float mull = smoothstep(0.0, 0.07, fr) * smoothstep(1.0, 0.93, fr);
  atmoEm = c * lit * mull * (0.32 + 0.75 * h2) * uNight;
}`
    } else if (o.windows === 'context') {
      // окружающие дома: сетка окон 3,2 × 3,0 м на вертикальных гранях, первый этаж без окон
      surface += `
{
  float vert = step(0.85, 1.0 - abs(atmoN.y));
  vec2 t = normalize(vec2(-atmoN.z, atmoN.x) + 1e-5);
  float along = dot(vAtmoW.xz, t) / 3.2;
  float up = vAtmoW.y / 3.0;
  vec2 fr = vec2(fract(along), fract(up));
  float win = step(0.24, fr.x) * step(fr.x, 0.76) * step(0.3, fr.y) * step(fr.y, 0.82) * vert * step(1.0, up);
  float h = atmoHash(vec2(floor(along) * 1.7 + floor(up) * 13.1, floor(up) + 3.0));
  float h2 = atmoHash(vec2(floor(along) + 41.0, floor(up) * 2.3));
  float lit = step(h, uLit * 0.6);
  diffuseColor.rgb *= 1.0 - 0.45 * win * uNight;
  vec3 c = mix(vec3(1.0, 0.6, 0.28), vec3(1.0, 0.84, 0.62), h2);
  atmoEm = c * win * lit * (0.22 + 0.45 * h2) * uNight;
}`
    }

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
uniform float uSnow;
uniform float uWet;
uniform float uNight;
uniform float uLit;
uniform float uTime;
varying vec3 vAtmoW;
${glassWin ? 'varying vec3 vAtmoM;\nvarying vec3 vAtmoMN;\nvarying float vAtmoLvl;' : ''}
${NOISE}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
${surface}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
totalEmissiveRadiance += atmoEm;`)
  }
  return m
}

// ---------- осадки ----------

const PRECIP_COMMON = /* glsl */ `
uniform float uTime;
uniform vec3 uCenter;
uniform vec3 uBox;
uniform vec2 uWind;
uniform float uSpeed;
uniform vec4 uExcl;     // центр x, z и полуразмеры прямоугольника, внутри которого осадков нет (квартира при прогулке)
uniform vec2 uExclRot;  // cos, sin поворота прямоугольника
uniform float uExclOn;

vec3 precipPos(vec3 seed) {
  vec3 p = seed * uBox;
  float sp = uSpeed * (0.8 + 0.4 * fract(seed.x * 91.7));
  p.y -= uTime * sp;
  p.xz += uWind * uTime * (sp / max(uSpeed, 0.001));
  vec3 lo = uCenter - uBox * 0.5;
  return mod(p - lo, uBox) + lo;
}

bool precipExcluded(vec3 wp) {
  if (uExclOn < 0.5) return false;
  vec2 d = wp.xz - uExcl.xy;
  vec2 l = vec2(d.x * uExclRot.x + d.y * uExclRot.y, -d.x * uExclRot.y + d.y * uExclRot.x);
  return abs(l.x) < uExcl.z && abs(l.y) < uExcl.w;
}
`

export class Precipitation {
  readonly group = new THREE.Group()
  private rainMat: THREE.ShaderMaterial
  private snowMat: THREE.ShaderMaterial
  private rain: THREE.LineSegments
  private snow: THREE.Points
  private shared = {
    uTime: { value: 0 },
    uCenter: { value: new THREE.Vector3() },
    uExcl: { value: new THREE.Vector4() },
    uExclRot: { value: new THREE.Vector2(1, 0) },
    uExclOn: { value: 0 },
  }

  constructor() {
    this.group.name = 'precipitation'
    // дождь: отрезки-«капли», вытянутые по скорости
    const RAIN = 18000
    const rs = new Float32Array(RAIN * 2 * 4)
    for (let i = 0; i < RAIN; i++) {
      const x = Math.random(), y = Math.random(), z = Math.random()
      rs.set([x, y, z, 0, x, y, z, 1], i * 8)
    }
    const rg = new THREE.BufferGeometry()
    rg.setAttribute('seed', new THREE.BufferAttribute(rs, 4))
    rg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(RAIN * 2 * 3), 3))
    this.rainMat = new THREE.ShaderMaterial({
      uniforms: {
        ...this.shared,
        uBox: { value: new THREE.Vector3(90, 60, 90) },
        uWind: { value: new THREE.Vector2(1.6, 0.6) },
        uSpeed: { value: 9 },
        uLen: { value: 0.9 },
        uOpacity: { value: 0 },
        uColor: { value: new THREE.Color(0.75, 0.8, 0.86) },
      },
      vertexShader: /* glsl */ `
        attribute vec4 seed;
        uniform float uLen;
        varying float vA;
        ${PRECIP_COMMON}
        void main() {
          vec3 wp = precipPos(seed.xyz);
          vec3 vel = normalize(vec3(uWind.x, -uSpeed, -uWind.y));
          wp += vel * seed.w * uLen * (0.7 + 0.6 * fract(seed.z * 37.1));
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          if (precipExcluded(wp)) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          float d = -mv.z;
          vA = (1.0 - 0.7 * seed.w) * smoothstep(0.4, 3.0, d) * (1.0 - smoothstep(30.0, 55.0, d));
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vA;
        void main() { gl_FragColor = vec4(uColor, vA * uOpacity); }`,
      transparent: true,
      depthWrite: false,
      fog: false,
    })
    this.rain = new THREE.LineSegments(rg, this.rainMat)
    this.rain.frustumCulled = false
    this.rain.renderOrder = 10

    // снег: мягкие точки с покачиванием
    const SNOW = 22000
    const ss = new Float32Array(SNOW * 3)
    for (let i = 0; i < ss.length; i++) ss[i] = Math.random()
    const sg = new THREE.BufferGeometry()
    sg.setAttribute('seed', new THREE.BufferAttribute(ss, 3))
    sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SNOW * 3), 3))
    this.snowMat = new THREE.ShaderMaterial({
      uniforms: {
        ...this.shared,
        uBox: { value: new THREE.Vector3(70, 45, 70) },
        uWind: { value: new THREE.Vector2(0.5, 0.2) },
        uSpeed: { value: 1.1 },
        uSize: { value: 70 },
        uOpacity: { value: 0 },
        uColor: { value: new THREE.Color(1, 1, 1) },
      },
      vertexShader: /* glsl */ `
        attribute vec3 seed;
        uniform float uSize;
        varying float vA;
        ${PRECIP_COMMON}
        void main() {
          vec3 wp = precipPos(seed);
          wp.x += sin(uTime * 0.7 + seed.y * 40.0) * 0.6;
          wp.z += cos(uTime * 0.55 + seed.z * 40.0) * 0.6;
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          if (precipExcluded(wp)) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          float d = -mv.z;
          gl_PointSize = clamp(uSize * (0.6 + 0.8 * fract(seed.x * 13.3)) / max(d, 0.5), 1.0, 26.0);
          vA = smoothstep(0.3, 1.5, d) * (1.0 - smoothstep(26.0, 40.0, d));
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        uniform vec3 uColor;
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.12, r);
          gl_FragColor = vec4(uColor, a * vA * uOpacity);
        }`,
      transparent: true,
      depthWrite: false,
      fog: false,
    })
    this.snow = new THREE.Points(sg, this.snowMat)
    this.snow.frustumCulled = false
    this.snow.renderOrder = 10
    this.group.add(this.rain, this.snow)
  }

  /**
   * rain, snow — интенсивность 0…1; light — освещённость (днём 1, ночью ~0,15);
   * центр облака осадков — перед камерой, чтобы капли были между зрителем и домом.
   */
  update(dt: number, camera: THREE.Camera, rain: number, snow: number, light: number, pixelRatio: number) {
    this.shared.uTime.value += dt
    const fwd = new THREE.Vector3()
    camera.getWorldDirection(fwd)
    const cam = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld)
    this.shared.uCenter.value.copy(cam).addScaledVector(fwd, 22)
    this.rainMat.uniforms.uOpacity.value = 0.55 * rain
    this.snowMat.uniforms.uOpacity.value = 0.95 * snow
    this.rainMat.uniforms.uColor.value.setRGB(0.32 + 0.45 * light, 0.35 + 0.47 * light, 0.4 + 0.48 * light)
    const s = 0.35 + 0.65 * light
    this.snowMat.uniforms.uColor.value.setRGB(s, s, s * 1.02)
    this.snowMat.uniforms.uSize.value = 120 * pixelRatio
    this.rain.visible = rain > 0.01
    this.snow.visible = snow > 0.01
  }

  /** Внутри прямоугольника (план квартиры в мире) осадков нет; null — без исключения */
  setExclusion(rect: { cx: number; cz: number; hx: number; hz: number; rot: number } | null) {
    this.shared.uExclOn.value = rect ? 1 : 0
    if (!rect) return
    this.shared.uExcl.value.set(rect.cx, rect.cz, rect.hx, rect.hz)
    this.shared.uExclRot.value.set(Math.cos(rect.rot), Math.sin(rect.rot))
  }
}

// ---------- небо: облака и звёзды ----------

export class SkyLayers {
  readonly clouds: THREE.Mesh
  /** копия облаков для карты окружения (отражения в стекле) */
  readonly cloudsEnv: THREE.Mesh
  readonly stars: THREE.Points
  readonly uniforms = {
    uTime: atmoUniforms.uTime,
    uCover: { value: 0 },
    uLight: { value: new THREE.Color(1, 1, 1) },
    uShade: { value: new THREE.Color(0.6, 0.63, 0.68) },
    uHorizon: { value: new THREE.Color(0.8, 0.82, 0.85) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  }
  private starMat: THREE.ShaderMaterial

  constructor() {
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vDir = wp.xyz - cameraPosition;
          gl_Position = projectionMatrix * viewMatrix * wp;
          gl_Position.z = gl_Position.w;
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform float uCover;
        uniform vec3 uLight;
        uniform vec3 uShade;
        uniform vec3 uHorizon;
        uniform vec3 uSunDir;
        varying vec3 vDir;
        ${NOISE}
        float fbm(vec2 p) {
          float a = 0.5, s = 0.0;
          for (int i = 0; i < 6; i++) { s += a * atmoNoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; }
          return s;
        }
        void main() {
          vec3 d = normalize(vDir);
          float h = max(d.y, 0.0);
          vec2 uv = d.xz / (h + 0.1) * 1.2 + vec2(uTime * 0.006, uTime * 0.0025);
          float n = fbm(uv);
          float th = 0.78 - 0.48 * uCover;
          float cov = max(smoothstep(th - 0.09, th + 0.09, n), smoothstep(0.85, 1.0, uCover));
          float sunAmt = pow(max(dot(d, uSunDir), 0.0), 5.0);
          float thick = smoothstep(0.35, 0.85, n);
          vec3 col = mix(uLight, uShade, thick * (0.4 + 0.5 * uCover));
          col += uLight * sunAmt * 0.35 * (1.0 - uCover);
          float horizon = 1.0 - smoothstep(0.0, 0.22, h);
          col = mix(col, uHorizon, horizon * (0.5 + 0.5 * uCover));
          float a = clamp(cov * smoothstep(-0.02, 0.06, d.y) + horizon * uCover * 0.95, 0.0, 1.0);
          gl_FragColor = vec4(col, a);
        }`,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      fog: false,
    })
    const geo = new THREE.SphereGeometry(1, 48, 24)
    this.clouds = new THREE.Mesh(geo, mat)
    this.clouds.scale.setScalar(4500)
    this.clouds.renderOrder = -1
    this.clouds.frustumCulled = false
    this.cloudsEnv = new THREE.Mesh(geo, mat)
    this.cloudsEnv.scale.setScalar(900)

    // звёзды: верхняя полусфера, мерцание
    const N = 2600
    const pos = new Float32Array(N * 3)
    const seed = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      const u = Math.random()
      const th = Math.random() * Math.PI * 2
      const y = 0.04 + 0.96 * Math.sqrt(u)
      const r = Math.sqrt(1 - y * y)
      pos.set([r * Math.cos(th), y, r * Math.sin(th)], i * 3)
      seed[i] = Math.random()
    }
    const sg = new THREE.BufferGeometry()
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    sg.setAttribute('seed', new THREE.BufferAttribute(seed, 1))
    this.starMat = new THREE.ShaderMaterial({
      uniforms: { uTime: atmoUniforms.uTime, uOpacity: { value: 0 }, uPixel: { value: 1 } },
      vertexShader: /* glsl */ `
        attribute float seed;
        uniform float uTime;
        uniform float uPixel;
        varying float vA;
        void main() {
          vec4 wp = vec4(cameraPosition + position * 4000.0, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
          gl_Position.z = gl_Position.w;
          float big = step(0.93, seed);
          gl_PointSize = (1.2 + 1.6 * big) * uPixel;
          vA = (0.35 + 0.65 * seed) * (0.75 + 0.25 * sin(uTime * (1.5 + seed * 3.0) + seed * 60.0)) * smoothstep(0.04, 0.2, position.y);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0), smoothstep(0.5, 0.1, r) * vA * uOpacity);
        }`,
      transparent: true,
      depthWrite: false,
      fog: false,
    })
    this.stars = new THREE.Points(sg, this.starMat)
    this.stars.frustumCulled = false
    this.stars.renderOrder = -2
  }

  setStars(opacity: number, pixelRatio: number) {
    this.starMat.uniforms.uOpacity.value = opacity
    this.starMat.uniforms.uPixel.value = pixelRatio
    this.stars.visible = opacity > 0.01
  }
}

// ---------- фонари ----------

/**
 * Уличные фонари вдоль крупных улиц и вокруг участка: столб, светильник и световое пятно на земле.
 * Пятна — аддитивные «декали», а не настоящие источники: сотни фонарей стоят как один вызов отрисовки.
 */
export class StreetLamps {
  readonly group = new THREE.Group()
  private headMat = new THREE.MeshBasicMaterial({ color: 0x777777, toneMapped: true })
  private poolMat: THREE.ShaderMaterial
  private static HEAD_ON = new THREE.Color(1.0, 0.72, 0.42).multiplyScalar(4)
  private static HEAD_OFF = new THREE.Color(0x8a8a86)

  constructor(ctx: Context, site: Point[], poleMat: THREE.Material) {
    this.group.name = 'lamps'
    const spots: { x: number; y: number; h: number; r: number }[] = []
    const avenues = new Set(['primary', 'secondary', 'tertiary', 'trunk', 'residential', 'living_street', 'service'])
    for (const r of ctx.roads) {
      if (!avenues.has(r.k ?? '')) continue
      const small = r.k === 'service' || r.k === 'living_street'
      const step = small ? 26 : 34
      let carry = step * 0.5
      let side = 1
      for (let i = 0; i < r.p.length - 1; i++) {
        const [ax, ay] = r.p[i]
        const [bx, by] = r.p[i + 1]
        const len = Math.hypot(bx - ax, by - ay)
        if (len < 0.1) continue
        const nx = -(by - ay) / len
        const ny = (bx - ax) / len
        let t = carry
        while (t < len) {
          const off = r.w / 2 + 1.0
          const x = ax + ((bx - ax) * t) / len + nx * off * side
          const y = ay + ((by - ay) * t) / len + ny * off * side
          if (Math.hypot(x, y) < 900) spots.push({ x, y, h: small ? 5 : 8, r: small ? 9 : 13 })
          side = -side
          t += step
        }
        carry = t - len
      }
    }
    // невысокие светильники вдоль площадки дома
    const ring = inflate(site, 7)
    for (let i = 0; i < ring.length; i++) {
      const [ax, ay] = ring[i]
      const [bx, by] = ring[(i + 1) % ring.length]
      const len = Math.hypot(bx - ax, by - ay)
      for (let t = 4; t < len; t += 11) spots.push({ x: ax + ((bx - ax) * t) / len, y: ay + ((by - ay) * t) / len, h: 3.2, r: 6.5 })
    }

    const poleGeo = new THREE.CylinderGeometry(0.07, 0.11, 1, 6)
    const headGeo = new THREE.BoxGeometry(0.55, 0.14, 0.3)
    const poolGeo = new THREE.PlaneGeometry(2, 2).rotateX(-Math.PI / 2)
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, spots.length)
    const heads = new THREE.InstancedMesh(headGeo, this.headMat, spots.length)
    this.poolMat = new THREE.ShaderMaterial({
      uniforms: { uOn: { value: 0 }, uColor: { value: new THREE.Color(1.0, 0.68, 0.38) } },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = position.xz;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uOn;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          float r = length(vUv);
          float a = pow(max(1.0 - r, 0.0), 2.2);
          gl_FragColor = vec4(uColor * a * uOn * 0.6, 1.0);
        }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    })
    const pools = new THREE.InstancedMesh(poolGeo, this.poolMat, spots.length)
    pools.renderOrder = 1
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    spots.forEach((s, i) => {
      m.compose(new THREE.Vector3(s.x, s.h / 2, -s.y), q, new THREE.Vector3(1, s.h, 1))
      poles.setMatrixAt(i, m)
      m.compose(new THREE.Vector3(s.x, s.h + 0.05, -s.y), q, new THREE.Vector3(1, 1, 1))
      heads.setMatrixAt(i, m)
      m.compose(new THREE.Vector3(s.x, 0.16, -s.y), q, new THREE.Vector3(s.r, 1, s.r))
      pools.setMatrixAt(i, m)
    })
    poles.castShadow = true
    this.group.add(poles, heads, pools)
  }

  setOn(on: number) {
    this.headMat.color.copy(StreetLamps.HEAD_OFF).lerp(StreetLamps.HEAD_ON, on)
    this.poolMat.uniforms.uOn.value = on
  }
}

function inflate(p: Point[], d: number): Point[] {
  const cx = p.reduce((s, q) => s + q[0], 0) / p.length
  const cy = p.reduce((s, q) => s + q[1], 0) / p.length
  return p.map(([x, y]) => {
    const l = Math.hypot(x - cx, y - cy) || 1
    return [x + ((x - cx) / l) * d, y + ((y - cy) / l) * d]
  })
}
