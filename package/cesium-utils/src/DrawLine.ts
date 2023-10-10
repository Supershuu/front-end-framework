import { viewer } from './index'
import {
  CallbackProperty, Cartesian3,
  Color,
  ColorMaterialProperty,
  defined, Entity,
  HeightReference,
  PolygonHierarchy,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Viewer
} from 'cesium'

function createPoint(worldPosition:Cartesian3) {
  const point = viewer.entities.add({
    position: worldPosition,
    point: {
      color: Color.WHITE,
      pixelSize: 5,
      heightReference: HeightReference.CLAMP_TO_GROUND
    }
  })
  return point
}
function drawShape(positionData:CallbackProperty|Cartesian3[]) {
  let shape
  if (drawingMode === 'line') {
    shape = viewer.entities.add({
      polyline: {
        positions: positionData,
        clampToGround: true,
        width: 3
      }
    })
  } else if (drawingMode === 'polygon') {
    shape = viewer.entities.add({
      polygon: {
        hierarchy: positionData,
        material: new ColorMaterialProperty(Color.WHITE.withAlpha(0.7))
      }
    })
  }
  return shape
}
let drawingMode = 'line'
let activeShapePoints:Cartesian3[] = []
let activeShape:Entity | undefined
let floatingPoint:Entity | undefined
function terminateShape() {
  activeShapePoints.pop()
  console.log(activeShapePoints, 'activeShapePoints')
  drawShape(activeShapePoints)
  floatingPoint && viewer.entities.remove(floatingPoint)
  activeShape && viewer.entities.remove(activeShape)
  floatingPoint = undefined
  activeShape = undefined
  activeShapePoints = []
}
const drawLine = (viewer: Viewer) => {
  const handler = new ScreenSpaceEventHandler(viewer.canvas)
  handler.setInputAction(function (event:ScreenSpaceEventHandler.PositionedEvent) {
    // We use `viewer.scene.globe.pick here instead of `viewer.camera.pickEllipsoid` so that
    // we get the correct point when mousing over terrain.
    const ray = viewer.camera.getPickRay(event.position);
    if (!ray) return;
    const earthPosition = viewer.scene.globe.pick(ray, viewer.scene)
    // `earthPosition` will be undefined if our mouse is not over the globe.
    if (defined(earthPosition)) {
      if (!earthPosition) return
      if (activeShapePoints.length === 0) {
        floatingPoint = createPoint(earthPosition)
        activeShapePoints.push(earthPosition)
        const dynamicPositions = new CallbackProperty(function () {
          if (drawingMode === 'polygon') {
            return new PolygonHierarchy(activeShapePoints)
          }
          return activeShapePoints
        }, false)
        activeShape = drawShape(dynamicPositions)
      }
      activeShapePoints.push(earthPosition)
      createPoint(earthPosition)
    }
  }, ScreenSpaceEventType.LEFT_CLICK)

  handler.setInputAction(function (event:ScreenSpaceEventHandler.PositionedEvent) {
    if (defined(floatingPoint)) {
      const ray = viewer.camera.getPickRay(event.position);
      if (!ray)return
      const newPosition = viewer.scene.globe.pick(ray, viewer.scene)
      if (defined(newPosition)) {
        if (!floatingPoint || !newPosition) return;
        // @ts-ignore
        floatingPoint.position = newPosition
        activeShapePoints.pop()
        activeShapePoints.push(newPosition)
      }
    }
  }, ScreenSpaceEventType.MOUSE_MOVE)

  handler.setInputAction(function (event:ScreenSpaceEventHandler.PositionedEvent) {
    terminateShape()
  }, ScreenSpaceEventType.RIGHT_CLICK)
}

export { drawLine }
