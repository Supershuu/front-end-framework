import { Color, Vector3 } from 'three';
interface DirectionalLightType {
    position: Vector3;
    color: Color | string | number;
    intensity: number;
}
/**
 * 封装
 * @param list
 */
declare const directionArrLight: (list: DirectionalLightType[]) => void;
declare const ambientLight: () => void;
export { directionArrLight, ambientLight };
export type { DirectionalLightType };
