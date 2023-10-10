import {
  ScreenSpaceEventType,
  Cartesian3,
  SceneTransforms,
  ScreenSpaceEventHandler,
  Viewer
} from 'cesium'

const createPopu = (
  viewer: Viewer,
  id: string,
  styleShow: string,
  cartesian: Cartesian3,
  showLocation: number
) => {
  const domElement = document.getElementById(id)
  if (!domElement) return
  domElement.style.display = styleShow
  domElement.style.left =
    SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian).x - 220 / 2 + 'px'
  domElement.style.top =
    SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian).y - 150 + 'px'
  viewer.scene.postRender.addEventListener(() => {
    const windowPosition = SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian)
    if (windowPosition === undefined) return
    domElement.style.left = windowPosition.x - 220 / 2 + 'px'
    domElement.style.top = windowPosition.y - 150 + 'px'
  })
  const handler = new ScreenSpaceEventHandler(viewer.scene.canvas)
  if (viewer.scene.camera.positionCartographic.height > 2000) {
    if (domElement) domElement.style.display = 'none'
  } else {
    if (domElement) domElement.style.display = 'block'
  }
  handler.setInputAction(function () {
    if (viewer.scene.camera.positionCartographic.height > showLocation) {
      if (domElement) domElement.style.display = 'none'
    } else {
      if (domElement) domElement.style.display = 'block'
    }
  }, ScreenSpaceEventType.WHEEL)
}

export { createPopu }
