import { AmbientLight, Color, DirectionalLight, Vector3 } from 'three'
import { threeObj } from './index'
interface DirectionalLightType {
  position: Vector3
  color: Color | string | number
  intensity: number
}
/**
 * 封装
 * @param list
 */
const directionArrLight = (list: DirectionalLightType[]) => {
  list.forEach((item) => {
    const directionLight = new DirectionalLight(item.color, item.intensity)
    directionLight.position.set(item.position.x, item.position.y, item.position.z)
    threeObj.scene.add(directionLight)
  })
}

const ambientLight = () => {
  const ambientLight = new AmbientLight(0xffffff, 0.6)
  threeObj.scene.add(ambientLight)
}

export { directionArrLight, ambientLight }
export type { DirectionalLightType }
