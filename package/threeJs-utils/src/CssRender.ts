import {MOUSE, Scene} from 'three'
import {threeObj} from './index'
import {CSS3DObject, CSS3DRenderer} from 'three/examples/jsm/renderers/CSS3DRenderer'
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls'

const tagRender = (
  element: HTMLElement,
  position: [x: number, y: number, z: number],
  ratation: [x: number, y: number, z: number]
) => {
  threeObj.cssScene = new Scene()
  threeObj.tag = new CSS3DObject(element)
  threeObj.tag.position.set(...position)
  threeObj.tag.rotation.set(...ratation)
  threeObj.tag.scale.set(1, 1, 1)
  threeObj.cssScene.add(threeObj.tag)
  threeObj.cssRender = new CSS3DRenderer()
  threeObj.cssRender.setSize(threeObj.dom.offsetWidth, threeObj.dom.offsetHeight)
  threeObj.cssRender.domElement.style.position = 'absolute'
  threeObj.cssRender.domElement.style.top = '0'
  threeObj.dom.appendChild(threeObj.cssRender.domElement)
  threeObj.trackBallControls = new TrackballControls(threeObj.camera, threeObj.cssRender.domElement);
  threeObj.trackBallControls.mouseButtons.LEFT = MOUSE.PAN;
  threeObj.trackBallControls.mouseButtons.RIGHT = MOUSE.ROTATE
  const fn = () => {
    requestAnimationFrame(fn)
    threeObj.cssRender.render(threeObj.cssScene, threeObj.camera)
    threeObj.renderer.render(threeObj.scene, threeObj.camera)
    threeObj.camera.updateMatrixWorld(true)
    threeObj.trackBallControls.update()
    threeObj.composer.render()
  }
  fn()
}

export { tagRender }
