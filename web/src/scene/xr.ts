import * as THREE from 'three'

/**
 * VR через WebXR: тот же сайт в браузере шлема (Meta Quest и др.), масштаб 1:1.
 * Камера живёт внутри «рига»; перемещение — телепорт лучом контроллера, поворот — стиком по 30°.
 */
export class XRController {
  supported = false
  active = false
  private controllers: THREE.Group[] = []
  private aiming = new Map<THREE.Group, boolean>()
  private marker: THREE.Mesh
  private target: THREE.Vector3 | null = null
  private floorY = 0
  private walkable: (p: THREE.Vector3) => boolean = () => true
  private turnCooldown = 0
  onEnd: () => void = () => {}

  constructor(private renderer: THREE.WebGLRenderer, private rig: THREE.Group, private camera: THREE.PerspectiveCamera) {
    this.marker = new THREE.Mesh(
      new THREE.RingGeometry(0.22, 0.3, 40).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0x3ddc97, transparent: true, opacity: 0.9, depthTest: false }),
    )
    this.marker.visible = false
    this.marker.renderOrder = 10
    for (let i = 0; i < 2; i++) {
      const c = renderer.xr.getController(i)
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 }),
      )
      line.scale.z = 8
      c.add(line)
      c.addEventListener('selectstart', () => this.aiming.set(c, true))
      c.addEventListener('selectend', () => {
        this.aiming.set(c, false)
        this.teleport()
      })
      rig.add(c)
      this.controllers.push(c)
    }
  }

  async checkSupport(): Promise<boolean> {
    const xr = (navigator as Navigator & { xr?: { isSessionSupported(m: string): Promise<boolean> } }).xr
    try {
      this.supported = !!xr && (await xr.isSessionSupported('immersive-vr'))
    } catch {
      this.supported = false
    }
    return this.supported
  }

  async enter(scene: THREE.Scene, floorPos: THREE.Vector3, yaw: number, walkable: (p: THREE.Vector3) => boolean) {
    const xr = (navigator as Navigator & { xr?: { requestSession(m: string, o: object): Promise<XRSession> } }).xr
    if (!xr) return
    const session = await xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor'] })
    this.renderer.xr.setReferenceSpaceType('local-floor')
    await this.renderer.xr.setSession(session)
    this.active = true
    this.floorY = floorPos.y
    this.walkable = walkable
    this.rig.position.copy(floorPos)
    this.rig.rotation.set(0, yaw, 0)
    if (!this.marker.parent) scene.add(this.marker)
    session.addEventListener('end', () => {
      this.active = false
      this.marker.visible = false
      this.rig.position.set(0, 0, 0)
      this.rig.rotation.set(0, 0, 0)
      this.onEnd()
    })
  }

  update(dt: number) {
    if (!this.active) return
    this.target = null
    const ray = new THREE.Raycaster()
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -this.floorY)
    for (const c of this.controllers) {
      if (!this.aiming.get(c)) continue
      const m = c.matrixWorld
      ray.ray.origin.setFromMatrixPosition(m)
      ray.ray.direction.set(0, 0, -1).transformDirection(m)
      const hit = new THREE.Vector3()
      if (ray.ray.intersectPlane(plane, hit) && hit.distanceTo(ray.ray.origin) < 12) {
        this.target = hit
      }
    }
    if (this.target) {
      const ok = this.walkable(this.target)
      this.marker.visible = true
      this.marker.position.copy(this.target).setY(this.floorY + 0.02)
      ;(this.marker.material as THREE.MeshBasicMaterial).color.set(ok ? 0x3ddc97 : 0xe5484d)
      if (!ok) this.target = null
    } else {
      this.marker.visible = false
    }

    // поворот стиком
    this.turnCooldown -= dt
    const session = this.renderer.xr.getSession()
    if (session && this.turnCooldown <= 0) {
      for (const src of session.inputSources) {
        const ax = src.gamepad?.axes?.[2] ?? 0
        if (Math.abs(ax) > 0.7) {
          this.snapTurn(ax > 0 ? -Math.PI / 6 : Math.PI / 6)
          this.turnCooldown = 0.35
          break
        }
      }
    }
  }

  private teleport() {
    if (!this.target) return
    const head = new THREE.Vector3()
    this.camera.getWorldPosition(head)
    this.rig.position.x += this.target.x - head.x
    this.rig.position.z += this.target.z - head.z
    this.marker.visible = false
  }

  private snapTurn(angle: number) {
    const head = new THREE.Vector3()
    this.camera.getWorldPosition(head)
    const offset = this.rig.position.clone().sub(head)
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle)
    this.rig.position.copy(head).add(offset)
    this.rig.rotation.y += angle
  }
}
