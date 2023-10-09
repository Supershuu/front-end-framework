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
  document.getElementById(id).style.display = styleShow
  document.getElementById(id).style.left =
    SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian).x - 220 / 2 + 'px'
  document.getElementById(id).style.top =
    SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian).y - 150 + 'px'
  viewer.scene.postRender.addEventListener(() => {
    let windowPosition = SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian)
    if (windowPosition === undefined) return
    document.getElementById(id).style.left = windowPosition.x - 220 / 2 + 'px'
    document.getElementById(id).style.top = windowPosition.y - 150 + 'px'
  })
  let handler = new ScreenSpaceEventHandler(viewer.scene.canvas)
  if (viewer.scene.camera.positionCartographic.height > 2000) {
    if (document.getElementById(id)) document.getElementById(id).style.display = 'none'
  } else {
    if (document.getElementById(id)) document.getElementById(id).style.display = 'block'
  }
  handler.setInputAction(function () {
    if (viewer.scene.camera.positionCartographic.height > showLocation) {
      if (document.getElementById(id)) document.getElementById(id).style.display = 'none'
    } else {
      if (document.getElementById(id)) document.getElementById(id).style.display = 'block'
    }
  }, ScreenSpaceEventType.WHEEL)
}

export { createPopu }
