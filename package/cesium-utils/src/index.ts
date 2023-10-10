import {
  Cartesian2,
  Cartesian3,
  Cartographic,
  Cesium3DTileset,
  Color,
  createOsmBuildingsAsync,
  defined,
  DistanceDisplayCondition,
  Entity,
  HeadingPitchRange,
  HeightReference,
  ImageryLayer,
  Ion,
  LabelStyle,
  Math as CesiumMath,
  Matrix4,
  NearFarScalar,
  PolylineGlowMaterialProperty,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Terrain,
  Viewer
} from 'cesium'
// @ts-ignore
import TooltipDiv from './tooltip.js'
import type { WaterDataType } from '../type/WaterDataType'
export { data4, data3, data2, data_wangjiagou, data_dongfanghong, data } from './GeoArr'
let viewer: Viewer
Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmFkZmZjMS01NDYzLTRhZjgtYTBhNi02N2ZkNTVkMTgxY2EiLCJpZCI6NTIwMDksImlhdCI6MTYxODM5Mjg1MX0.cB8V3NKIBCzMkb3J6YwL3yafHUFGxGPMlR9syq3CdKY'
// @ts-ignore
window.CESIUM_BASE_URL = '/'
const initViewer = (
  container: string,
  options?: Viewer.ConstructorOptions,
  callBack?: () => void
): Viewer => {
  viewer = new Viewer(container, {
    animation: false,
    fullscreenButton: false,
    homeButton: false,
    baseLayerPicker: false,
    terrain: Terrain.fromWorldTerrain(),
    timeline: false,
    navigationHelpButton: false,
    scene3DOnly: true,
    navigationInstructionsInitiallyVisible: false,
    geocoder: false,
    infoBox: false,
    baseLayer: false,
    ...options
  })
  const imageryLayer = ImageryLayer.fromWorldImagery({})
  viewer.scene.imageryLayers.add(imageryLayer)
  imageryLayer.readyEvent.addEventListener((provider) => {
    provider.errorEvent.addEventListener((error) => {
      if (callBack) callBack()
    })
  })
  ;(viewer.cesiumWidget.creditContainer as HTMLElement).style.display = 'none'
  viewer.scene.globe.depthTestAgainstTerrain = false
  return viewer
}
const lookAt = (
  viewer: Viewer,
  lat: number,
  lon: number,
  height: number,
  heading: number,
  pitch: number,
  roll: number,
  duration: number
) => {
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(lat, lon, height),
    orientation: {
      heading: CesiumMath.toRadians(heading),
      pitch: CesiumMath.toRadians(pitch),
      roll: CesiumMath.toRadians(roll)
    },
    duration
  })
}
const createOsmBuild = (viewer: Viewer) => {
  createOsmBuildingsAsync().then((building) => {
    viewer.scene.primitives.add(building)
  })
}
const loadTile = async (
  viewer: Viewer,
  url: string,
  num: number,
  fly: boolean,
  id?: string,
  name?: string,
  img?: string,
  num2?: number | boolean,
  near?: number,
  far?: number,
  maximumScreenSpaceError = 1,
  cacheBytes = 536870912
) => {
  const tile = await Cesium3DTileset.fromUrl(url, {
    show: true,
    backFaceCulling: true,
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 1,
    immediatelyLoadDesiredLevelOfDetail: false,
    loadSiblings: false,
    cullWithChildrenBounds: true,
    dynamicScreenSpaceError: true,
    dynamicScreenSpaceErrorDensity: 0.00278,
    dynamicScreenSpaceErrorFactor: 4.0,
    dynamicScreenSpaceErrorHeightFalloff: 0.25,
    maximumScreenSpaceError,
    cacheBytes
  })
  viewer.scene.primitives.add(tile)
  const center = tile.boundingSphere.center
  const cartographic = Cartographic.fromCartesian(center)
  const longitude = CesiumMath.toDegrees(cartographic.longitude)
  const latitude = CesiumMath.toDegrees(cartographic.latitude)
  id &&
    name &&
    img &&
    viewer.entities.add({
      id: `${id}`,
      position: Cartesian3.fromDegrees(longitude, latitude, 388),
      billboard: {
        image: `${img}`,
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        width: 40,
        height: 40,
        distanceDisplayCondition: new DistanceDisplayCondition(near, far)
      },
      label: {
        text: `${name}`,
        font: '14px',
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        disableDepthTestDistance: 999999,
        style: LabelStyle.FILL,
        outlineWidth: 2,
        showBackground: true,
        backgroundColor: new Color(0.5, 0.5, 0.5, 0.5),
        fillColor: Color.BLACK,
        pixelOffset: new Cartesian2(80, 0),
        distanceDisplayCondition: new DistanceDisplayCondition(near, far)
      }
    })

  if (typeof num2 === 'number') {
    const translation = new Cartesian3(center.x * num2, center.y * num2, center.z * num2)
    tile.modelMatrix = Matrix4.fromTranslation(translation)
    if (id === 'chiGuHan') {
      tile.modelMatrix = Matrix4.fromTranslation(new Cartesian3(1, 0, 0))
    }
    if (id === 'gongBeiQiao') {
      tile.modelMatrix = Matrix4.fromTranslation(new Cartesian3(-1, 8, 0))
    }
  } else {
    const surface = Cartesian3.fromRadians(0, 0, 0)
    const offset = Cartesian3.fromRadians(0, 0, num)
    const translation = Cartesian3.subtract(offset, surface, new Cartesian3())
    tile.modelMatrix = Matrix4.fromTranslation(translation)
  }
  fly && viewer.zoomTo(tile, new HeadingPitchRange(0.5, -0.2, tile.boundingSphere.radius * 1.0))
}

const loadEntities = (
  viewer: Viewer,
  id: string,
  url: string,
  lon: number,
  lat: number,
  entity: Entity | Entity.ConstructorOptions,
  callback: () => undefined,
  start: number,
  end: number
) => {
  if (entity instanceof Entity) {
    viewer.entities.add(entity)
  } else {
    viewer.entities.add({
      id,
      position: Cartesian3.fromDegrees(lon, lat, 600),
      billboard: {
        image: url,
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        width: 40,
        height: 40,
        disableDepthTestDistance: 999999
      },
      label: {
        text: id,
        font: '14px',
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        disableDepthTestDistance: 999999,
        style: LabelStyle.FILL,
        outlineWidth: 2,
        showBackground: true,
        backgroundColor: new Color(0.5, 0.5, 0.5, 0.5),
        fillColor: Color.BLACK,
        pixelOffset: new Cartesian2(80, 0)
      },
      ...entity
    })
    const linePositions = []
    linePositions.push(Cartesian3.fromDegrees(lon, lat, start))
    linePositions.push(Cartesian3.fromDegrees(lon, lat, end))
  }
  const handler = new ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => {
    const pick = viewer.scene.pick(event.position)
    if (defined(pick)) {
      if (pick.id && pick.id._id === id) {
        callback()
      }
    }
  }, ScreenSpaceEventType.LEFT_CLICK)
}

const loadPump = (
  viewer: Viewer,
  id: string,
  url: string,
  lon: number,
  lat: number,
  entity: Entity | Entity.ConstructorOptions,
  callback: () => undefined,
  start: number,
  end: number,
  height = 600
) => {
  if (entity instanceof Entity) {
    viewer.entities.add(entity)
  } else {
    viewer.entities.add({
      id,
      position: Cartesian3.fromDegrees(lon, lat, height),
      billboard: {
        image: url,
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        width: 40,
        height: 40,
        disableDepthTestDistance: 999999,
        distanceDisplayCondition: new DistanceDisplayCondition(start, end)
      },
      label: {
        text: id,
        font: '14px',
        heightReference: HeightReference.RELATIVE_TO_GROUND,
        disableDepthTestDistance: 999999,
        style: LabelStyle.FILL,
        outlineWidth: 2,
        showBackground: true,
        backgroundColor: new Color(0.5, 0.5, 0.5, 0.5),
        fillColor: Color.BLACK,
        pixelOffset: new Cartesian2(80, 0),
        distanceDisplayCondition: new DistanceDisplayCondition(start, end)
      },
      ...entity
    })
    const linePositions = []
    linePositions.push(Cartesian3.fromDegrees(lon, lat, start))
    linePositions.push(Cartesian3.fromDegrees(lon, lat, end))
  }
  const handler = new ScreenSpaceEventHandler(viewer.scene.canvas)
  handler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => {
    const pick = viewer.scene.pick(event.position)
    if (defined(pick)) {
      if (pick.id && pick.id._id === id) {
        callback()
      }
    }
  }, ScreenSpaceEventType.LEFT_CLICK)
}
const loadWaterPipe = (
  viewer: Viewer,
  datas: Array<WaterDataType>,
  flag: boolean,
  list: Array<{ id: string; content: string }> = []
) => {
  datas.forEach((item) => {
    if (item.entity) {
      viewer.entities.add({
        id: item.id,
        position: new Cartesian3(item.x, item.y, item.z),
        billboard: {
          image: item.image,
          // heightReference: HeightReference.CLAMP_TO_GROUND,
          width: 40,
          height: 40,
          scaleByDistance: new NearFarScalar(0, 1, 5e10, 1),
          disableDepthTestDistance: 999999,
          distanceDisplayCondition: new DistanceDisplayCondition(0, 10000)
        }
      })
    }
  })
  const pipe = viewer.entities.add({
    name: 'red',
    show: true,
    polyline: {
      positions: datas.map((item) => new Cartesian3(item.x, item.y, item.z)),
      clampToGround: true,
      width: 4,
      material: new PolylineGlowMaterialProperty({
        glowPower: 1,
        color: Color.BLUE
      })
      // material: new CustomMaterialProperty(undefined) as MaterialProperty
    }
  })
  const handler = new ScreenSpaceEventHandler(viewer.scene.canvas)
  TooltipDiv.initTool(viewer.cesiumWidget.container)
  flag &&
    handler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => {
      const pick = viewer.scene.pick(event.position)
      if (defined(pick)) {
        if (pick.id && list.find((item) => item.id === pick.id._id)) {
          const content = list.find((item) => item.id === pick.id._id)?.content
          TooltipDiv.showAt(event.position, `${content}`)
          viewer.scene.screenSpaceCameraController.enableRotate = false
          viewer.scene.screenSpaceCameraController.enableTranslate = false
          viewer.scene.screenSpaceCameraController.enableZoom = false
          viewer.scene.screenSpaceCameraController.enableTilt = false
        } else {
          TooltipDiv.setVisible(false)
          viewer.scene.screenSpaceCameraController.enableRotate = true
          viewer.scene.screenSpaceCameraController.enableTranslate = true
          viewer.scene.screenSpaceCameraController.enableZoom = true
          viewer.scene.screenSpaceCameraController.enableTilt = true
        }
      } else {
        TooltipDiv.setVisible(false)
        viewer.scene.screenSpaceCameraController.enableRotate = true
        viewer.scene.screenSpaceCameraController.enableTranslate = true
        viewer.scene.screenSpaceCameraController.enableZoom = true
        viewer.scene.screenSpaceCameraController.enableTilt = true
      }
    }, ScreenSpaceEventType.LEFT_CLICK)
}
const computeCircle = (radius: number) => {
  const positions: Array<Cartesian2> = []
  for (let i = 0; i < 360; i++) {
    const radians = CesiumMath.toRadians(i)
    positions.push(new Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)))
  }
  return positions
}
export {
  initViewer,
  createOsmBuild,
  loadTile,
  loadEntities,
  loadWaterPipe,
  lookAt,
  loadPump,
  viewer
}
export { createWater, waterReservoir } from './water'

export { createDam } from './dam'
export { SubmergenceAnalysis } from './submergeAnalysis'
export { geoMark } from './GeoData'
export { drawLine } from './DrawLine'
export { createPopu } from './createPopu'
