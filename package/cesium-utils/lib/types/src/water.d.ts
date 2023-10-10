import { Viewer, Cartesian3, Primitive } from 'cesium';
declare class waterReservoir {
    primitive: Primitive;
    extrudedHeight: number;
    degrees: Cartesian3[];
    viewer: Viewer;
    id: string;
    height: number;
    constructor(viewer: Viewer, id: string, degrees: any[], extrudedHeight: number, height: number);
    _drawPoly(degrees: Cartesian3[]): void;
    update(): void;
}
declare const createWater: (viewer: Viewer, id: string, degrees: number[], extrudedHeight: number) => void;
export { createWater, waterReservoir };
