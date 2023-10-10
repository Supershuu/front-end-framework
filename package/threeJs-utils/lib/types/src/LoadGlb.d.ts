import { Object3D } from 'three';
declare const loadGlb: (url: string, position?: [x: number, y: number, z: number], scale?: [x: number, y: number, z: number]) => void;
declare const checkIntersection: (event: PointerEvent, callback: (params: Object3D) => void) => void;
export { loadGlb, checkIntersection };
