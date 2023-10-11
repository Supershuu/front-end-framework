import {
  AmbientLight,
  AxesHelper,
  Curve,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  TubeGeometry,
  Vector3,
  PlaneGeometry,
  WebGLRenderer,
  HemisphereLight,
  Raycaster,
  ShaderMaterial,
  Vector2,
  BackSide,
  SphereGeometry,
  Clock,
  Color,
  SpotLight,
  DirectionalLight
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { Loader3DTiles, PointCloudColoring, type Runtime } from 'three-loader-3dtiles'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'

type CameraPosition = {
  x: number
  y: number
  z: number
}
class ThreeInit {
  // 场景
  scene!: Scene
  // 相机
  camera!: PerspectiveCamera
  // 相机位置
  cameraPosition: CameraPosition
  // 渲染器
  renderer!: WebGLRenderer
  // 挂载点
  dom: HTMLElement
  // 控制器
  controls!: OrbitControls
  // 辅助坐标系
  axesHelper!: AxesHelper
  cssObject!: CSS3DObject
  trackBallControls!: TrackballControls
  cssRender!: CSS3DRenderer
  cssScene!: Scene
  composer!: EffectComposer
  outlinePass!: OutlinePass
  tag!: CSS3DObject
  constructor(position: Vector3, dom: HTMLElement) {
    this.cameraPosition = { x: position.x, y: position.y, z: position.z }
    this.dom = dom;
  }
  // 初始化场景
  initScene(): void {
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500000)
    this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z)
    this.scene.add(this.camera)
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(this.dom.offsetWidth + 20, this.dom.offsetHeight)
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.shadowMap.enabled = true
    this.dom.appendChild(this.renderer.domElement)
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.enableZoom = false;
    this.renderer.render(this.scene, this.camera)
    this.composer = new EffectComposer(this.renderer)
    this.scene.background = new Color(0xbfe3dd)
    console.log(this.scene)
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
  // 开始渲染
  render(): void {
    const fn = () => {
      this.renderer.render(this.scene, this.camera)
      this.composer.render()
      requestAnimationFrame(fn)
    }
    fn()
  }
  // 初始化灯光
  initLight(): void {
    const ambientLight: AmbientLight = new AmbientLight(0xffffff, 0.6)
    this.scene.add(ambientLight)
    const directionalZPositiveLight = new DirectionalLight(0xffffff, 1)
    directionalZPositiveLight.position.set(0, 0, -800)
    this.scene.add(directionalZPositiveLight)
  }
  initAxesHelper(size: number) {
    const axesHelper = new AxesHelper(size)
    this.scene.add(axesHelper)
  }
  skybox() {
    const vertexShader = `varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`
    const fragmentShader = `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float offset;
            uniform float exponent;
            varying vec3 vWorldPosition;
            void main() {
                float h = normalize( vWorldPosition + offset ).y;
                gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
            }
        `
    // this.scene.background = new Color().setHSL( 0.6, 0, 1 );
    // this.scene.fog = new Fog( this.scene.background, 1, 5000 );

    this.scene.add(new AmbientLight(0xf0f0f0, 0.5))
    const light = new SpotLight(0xffffff, 0.5)
    light.position.set(0, 1500, 200)
    light.angle = Math.PI * 0.2
    light.decay = 0
    light.castShadow = true
    light.shadow.camera.near = 200
    light.shadow.camera.far = 2000
    light.shadow.bias = -0.000222
    light.shadow.mapSize.width = 1024
    light.shadow.mapSize.height = 1024
    this.scene.add(light)

    const planeGeometry = new PlaneGeometry(20000, 20000)
    planeGeometry.rotateX(-Math.PI / 2)
    const planeMaterial = new MeshBasicMaterial({ color: 0xf0ead4, opacity: 0.8, side: DoubleSide })

    const plane = new Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true
    this.scene.add(plane)

    const uniforms = {
      topColor: { value: new Color(0x0077ff) },
      bottomColor: { value: new Color(0xffffff) },
      offset: { value: 33 },
      exponent: { value: 0.6 }
    }
    const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 2)
    hemiLight.color.setHSL(0.6, 1, 0.6)
    hemiLight.groundColor.setHSL(0.095, 1, 0.75)
    hemiLight.position.set(0, 50, 0)
    // this.scene.add( hemiLight );
    uniforms['topColor'].value.copy(hemiLight.color)

    // this.scene.fog.color.copy( uniforms[ 'bottomColor' ].value );

    const skyGeo = new SphereGeometry(2000, 32, 15)
    const skyMat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: BackSide
    })

    const sky = new Mesh(skyGeo, skyMat)
    // this.scene.add( sky );
  }
  css3dRender(element: Array<HTMLElement>) {
    this.cssScene = new Scene()
    const cssObject0 = new CSS3DObject(element[0])
    const cssObject1 = new CSS3DObject(element[1])
    const cssObject2 = new CSS3DObject(element[2])
    const cssObject3 = new CSS3DObject(element[3])
    const cssObject4 = new CSS3DObject(element[4])
    const cssObject5 = new CSS3DObject(element[5])
    cssObject0.position.set(-250, 200, 115)
    cssObject1.position.set(-380, 0, 30)
    cssObject2.position.set(-220, 0, 30)
    cssObject3.position.set(-60, 0, 30)
    cssObject4.position.set(100, 0, 30)
    cssObject5.position.set(245, 0, -35)
    cssObject0.rotation.set(-Math.PI / 2, 0, 0)
    cssObject1.rotation.set(-Math.PI / 2, 0, 0)
    cssObject2.rotation.set(-Math.PI / 2, 0, 0)
    cssObject3.rotation.set(-Math.PI / 2, 0, 0)
    cssObject4.rotation.set(-Math.PI / 2, 0, 0)
    cssObject5.rotation.set(-Math.PI / 2, 0, 0)
    cssObject0.scale.set(1, 1, 1)
    cssObject1.scale.set(1, 1, 1)
    cssObject2.scale.set(1, 1, 1)
    this.cssScene.add(cssObject0)
    this.cssScene.add(cssObject1)
    this.cssScene.add(cssObject2)
    this.cssScene.add(cssObject3)
    this.cssScene.add(cssObject4)
    this.cssScene.add(cssObject5)
    this.cssRender = new CSS3DRenderer()
    this.cssRender.setSize(this.dom.offsetWidth, this.dom.offsetHeight)
    this.cssRender.domElement.style.position = 'absolute'
    this.cssRender.domElement.style.top = '0'
    this.dom.appendChild(this.cssRender.domElement)
    this.trackBallControls = new TrackballControls(this.camera, this.cssRender.domElement)
    // this.trackBallControls.noZoom = true
    const fn = () => {
      requestAnimationFrame(fn)
      this.cssRender.render(this.cssScene, this.camera)
      this.renderer.render(this.scene, this.camera)
      this.camera.updateMatrixWorld(true)
      this.trackBallControls.update()
      this.composer.render()
    }
    fn()
  }
  tubeGeo() {
    class CustomCurve extends Curve<any> {
      scale: number
      constructor(scale = 1) {
        super()
        this.scale = scale
      }
      getPoint(t: number, optionalTarget = new Vector3()): any {
        const tx = t
        const ty = 0
        const tz = 4 * t
        return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
      }
    }
    const path = new CustomCurve(115)
    const geometry = new TubeGeometry(path, 50, 8, 8, false)
    const material = new MeshBasicMaterial({
      color: 0x666666,
      side: DoubleSide,
      clipShadows: true
    })
    const mesh = new Mesh(geometry, material)
    mesh.position.set(0, 300, 0)
    this.scene.add(mesh)
    const raycaster = new Raycaster()
    const pointer = new Vector2()
    const onUpPosition = new Vector2()
    const onDownPosition = new Vector2()
    const transformControl = new TransformControls(this.camera, this.renderer.domElement)
    transformControl.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value
    })
    this.scene.add(transformControl)
    const onPointerMove = (event: DocumentEventMap['pointermove']) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(pointer, this.camera)
      const intersects = raycaster.intersectObjects([mesh])

      if (intersects.length > 0) {
        const object = intersects[0].object

        if (object !== transformControl.object) {
          this.cssRender.domElement.style.zIndex = '-2'
          transformControl.attach(object)
        }
      }
    }
    const onPointerUp = (event: DocumentEventMap['pointerup']) => {
      onUpPosition.x = event.clientX
      onUpPosition.y = event.clientY
      if (onDownPosition.distanceTo(onUpPosition) === 0) {
        this.cssRender.domElement.style.zIndex = '1'
        transformControl.detach()
      }
    }
    const onPointerDown = (event: DocumentEventMap['pointerdown']) => {
      onDownPosition.x = event.clientX
      onDownPosition.y = event.clientY
    }
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerup', onPointerUp)
    document.addEventListener('pointerdown', onPointerDown)
    this.renderer.render(this.scene, this.camera)
    // const fn = () => {
    //     requestAnimationFrame(fn)
    // }
    // fn();
  }
  async loadGeo() {
    const _this = this
    let tilesRuntime: undefined | Runtime = undefined
    const result = await Loader3DTiles.load({
      url: 'http://47.109.18.246:33301/tileset.json',
      renderer: _this.renderer,
      options: {
        dracoDecoderPath: 'https://unpkg.com/three@0.137.0/examples/js/libs/draco',
        basisTranscoderPath: 'https://unpkg.com/three@0.137.0/examples/js/libs/basis',
        debug: true,
        pointCloudColoring: PointCloudColoring.RGB
      }
    })
    const { model, runtime } = result
    this.scene.add(model)
    tilesRuntime = runtime
    const clock = new Clock()
    model.position.set(0, 100, 0)
    model.rotation.x = (Math.PI * 3) / 2
    function render() {
      const dt = clock.getDelta()
      if (tilesRuntime) {
        tilesRuntime.update(dt, _this.renderer, _this.camera)
      }
      _this.renderer.render(_this.scene, _this.camera)
      window.requestAnimationFrame(render)
    }
    render()
  }
  loadFbxInner(url: string) {
    const loader = new FBXLoader()
    loader.load(url, (objects) => {
      objects.rotation.set(0, Math.PI, 0)
      objects.scale.set(100, 100, 100)
      this.scene.add(objects)
      document.addEventListener('pointerdown', (event) => {
        const raycaster = new Raycaster()
        const pointer = new Vector2()
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
        raycaster.setFromCamera(pointer, this.camera)
        const intersects = raycaster.intersectObjects(this.scene.children)
        if (intersects.length > 0) {
          const object = intersects[0].object
          console.log(intersects, 'intersects')
        }
      })
    })
  }
  loadFbxTree(url: string) {
    const loader = new FBXLoader()
    loader.load(url, (objects) => {
      console.log(objects, 'objects')
      objects.traverse((object) => {
        console.log(object, 'object')
      })
      this.scene.add(objects)
    })
  }
  loadGlb(
    url: string,
    position?: [x: number, y: number, z: number],
    scale?: [x: number, y: number, z: number]
  ) {
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(url, (gltf) => {
      const model = gltf.scene
      scale && model.scale.set(...scale)
      position && model.position.set(...position)
      model.traverse((object) => {})
      this.scene.add(gltf.scene)
    })
  }
}

export default ThreeInit
