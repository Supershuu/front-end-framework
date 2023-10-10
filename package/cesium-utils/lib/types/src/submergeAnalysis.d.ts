import { Primitive, Viewer } from 'cesium';
export declare class SubmergenceAnalysis {
    viewer: Viewer;
    extrudedHeight: number;
    primitive: Primitive;
    polygon_degrees: number[];
    constructor(viewer: Viewer, isTerrain: boolean, height_max: number, height_min: number);
    _addDisListener(): void;
    _drawPoly(degrees: number[]): void;
    update(): void;
}
