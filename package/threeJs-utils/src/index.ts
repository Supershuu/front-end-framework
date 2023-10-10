import BaseThree from './BaseThree'
import { Vector3 } from 'three'
export { loadGlb, checkIntersection } from './LoadGlb'
export { directionArrLight, ambientLight, type DirectionalLightType } from './Light'
export { tagRender } from './CssRender'

let threeObj: BaseThree
const initThree = (position: Vector3, ele: HTMLElement) => {
  threeObj = new BaseThree(position, ele)
  threeObj.initScene()
}

export { threeObj, initThree }
