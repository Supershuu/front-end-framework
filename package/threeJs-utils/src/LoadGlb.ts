import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { threeObj } from './index'
import { Object3D, Raycaster, Vector2 } from 'three'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import type { Intersection } from 'three'

const loadGlb = (
  url: string,
  position?: [x: number, y: number, z: number],
  scale?: [x: number, y: number, z: number]
) => {
  const gltfLoader = new GLTFLoader()
  gltfLoader.load(url, (gltf) => {
    const model = gltf.scene
    scale && model.scale.set(...scale)
    position && model.position.set(...position)
    threeObj.scene.add(gltf.scene)
  })
}

const checkIntersection = (event: PointerEvent, callback: (params: Object3D) => void) => {
  const rayCaster = new Raycaster()
  const pointer = new Vector2()
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  rayCaster.setFromCamera(pointer, threeObj.camera)
  const intersects = rayCaster.intersectObjects(threeObj.scene.children)
  if (intersects.length > 0) {
    const model = intersects[0].object
    if (
      model &&
      (model.name === '水泵' ||
        model.name === '水泵_1' ||
        model.name === '水泵_2' ||
        model.name === '水泵_3')
    ) {
      callback(model)
      IntersectionOutline(intersects)
    }
  }
}

const IntersectionOutline = (intersects: Array<Intersection<Object3D>>) => {
  const renderPass = new RenderPass(threeObj.scene, threeObj.camera)
  threeObj.outlinePass = new OutlinePass(
    new Vector2(window.innerWidth, window.innerHeight),
    threeObj.scene,
    threeObj.camera
  )
  const effectFXAA = new ShaderPass(FXAAShader)
  effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight)
  threeObj.outlinePass.renderToScreen = true
  threeObj.outlinePass.edgeStrength = 5 //粗
  threeObj.outlinePass.edgeGlow = 1 //发光
  threeObj.outlinePass.edgeThickness = 2 //光晕粗
  threeObj.outlinePass.pulsePeriod = 0 //闪烁
  threeObj.outlinePass.usePatternTexture = false //是否使用贴图
  threeObj.outlinePass.visibleEdgeColor.set('#ffffff') // 设置显示的颜色
  threeObj.outlinePass.hiddenEdgeColor.set('#190a05')
  threeObj.composer.addPass(renderPass)
  threeObj.composer.addPass(effectFXAA)
  threeObj.composer.addPass(threeObj.outlinePass)
  threeObj.outlinePass.selectedObjects = [intersects[0].object]
}
export { loadGlb, checkIntersection }
