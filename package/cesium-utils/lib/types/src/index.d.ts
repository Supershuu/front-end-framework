import { Entity, Viewer } from 'cesium';
import type { WaterDataType } from '../type/WaterDataType';
export { data4, data3, data2, data_wangjiagou, data_dongfanghong, data } from './GeoArr';
declare let viewer: Viewer;
declare const initViewer: (container: string, options?: Viewer.ConstructorOptions, callBack?: () => void) => Viewer;
declare const lookAt: (viewer: Viewer, lat: number, lon: number, height: number, heading: number, pitch: number, roll: number, duration: number) => void;
declare const createOsmBuild: (viewer: Viewer) => void;
declare const loadTile: (viewer: Viewer, url: string, num: number, fly: boolean, id?: string, name?: string, img?: string, num2?: number | boolean, near?: number, far?: number, maximumScreenSpaceError?: number, cacheBytes?: number) => Promise<void>;
declare const loadEntities: (viewer: Viewer, id: string, url: string, lon: number, lat: number, entity: Entity | Entity.ConstructorOptions, callback: () => undefined, start: number, end: number) => void;
declare const loadPump: (viewer: Viewer, id: string, url: string, lon: number, lat: number, entity: Entity | Entity.ConstructorOptions, callback: () => undefined, start: number, end: number, height?: number) => void;
declare const loadWaterPipe: (viewer: Viewer, datas: Array<WaterDataType>, flag: boolean, list?: Array<{
    id: string;
    content: string;
}>) => void;
export { initViewer, createOsmBuild, loadTile, loadEntities, loadWaterPipe, lookAt, loadPump, viewer };
export { createWater, waterReservoir } from './water';
export { createDam } from './dam';
export { SubmergenceAnalysis } from './submergeAnalysis';
export { geoMark } from './GeoData';
export { drawLine } from './DrawLine';
export { createPopu } from './createPopu';
