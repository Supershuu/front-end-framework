<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import Tag from '../Tag/index.vue'
import {Vector3} from "three";
import type {DirectionalLightType} from "../../../package/threeJs-utils/src";
import {tagRender,loadGlb,checkIntersection,directionArrLight,ambientLight,threeObj,initThree} from "../../../package/threeJs-utils/src";
/**
 * todo: 数据值
 *       泵状态
 *       控制启停
 */
const three = ref();
let websocket: WebSocket;
const list: DirectionalLightType[] = [{
  position: new Vector3(0,0,-500),
  color: 0xffffff,
  intensity: 0.5
}, {
  position: new Vector3(0,0,500),
  color: 0xffffff,
  intensity: 0.5
}, {
  position: new Vector3(500,0,0),
  color: 0xffffff,
  intensity: 1
}, {
  position: new Vector3(-500,0,0),
  color: 0xffffff,
  intensity: 1
}]

const fn = (event:PointerEvent) => {
  checkIntersection(event, (params) => {
    if (params.name === '水泵') {
      threeObj.tag.position.set(700,500,0);
    } else if (params.name === '水泵_1') {
      threeObj.tag.position.set(400,500,0);
    }else if (params.name === '水泵_2') {
      threeObj.tag.position.set(50,500,0);
    }else if (params.name === '水泵_3') {
      threeObj.tag.position.set(-300,500,0);
    }
  });
}
onMounted(() => {
  const htmlWater1  = document.querySelector('#water1');
  initThree(new Vector3(3808,1274,-4081), three.value);
  directionArrLight(list);
  ambientLight();
  loadGlb('/model/tree02.glb', [1800,-380,0], [1200,1200,1200]);
  loadGlb('/model/tree01.glb',[-1800,110,-200], [1200,1200,1200]);
  loadGlb('/model/room_inner.glb', [0,0,0],[200,200,200]);
  loadGlb('/model/land.glb', [0,0,0], [200,200,200]);
  tagRender(htmlWater1 as HTMLElement, [0,500,0], [0,Math.PI,0])
  threeObj.cssRender.domElement.addEventListener('pointerdown', fn);
});
onBeforeUnmount(() => {
  threeObj.trackBallControls && threeObj.trackBallControls.dispose();
  threeObj.scene && threeObj.scene.children.forEach(item => {
    threeObj.scene.remove(item);
  })
  threeObj.cssScene && threeObj.cssScene.children.forEach(item => {
    threeObj.scene.remove(item);
  })
  threeObj.cssRender && threeObj.cssRender.domElement.removeEventListener('pointerdown', fn);
  websocket && websocket.close();
})
</script>
<template>
  <main>
    <Tag/>
    <div class="home">
      <div class="home-left">
      </div>
      <div class="home-right">
      </div>
      <div ref="three" class="three" id="three"/>
    </div>
  </main>
</template>
<style scoped src="./Pump.scss" lang="scss">
</style>
