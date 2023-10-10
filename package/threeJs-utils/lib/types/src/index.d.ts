import BaseThree from './BaseThree';
import { Vector3 } from 'three';
export { loadGlb, checkIntersection } from './LoadGlb';
export { directionArrLight, ambientLight, type DirectionalLightType } from './Light';
export { tagRender } from './CssRender';
declare let threeObj: BaseThree;
declare const initThree: (position: Vector3, ele: HTMLElement) => void;
export { threeObj, initThree };
