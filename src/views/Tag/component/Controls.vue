<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";
const gridData = [{
  date: '2023-03-01',
  equipment: '吕家沟',
  isWarning: '否'
}]
const router = useRouter();
onMounted(() => {
  document.querySelector('#controls')?.addEventListener('pointerdown',()=>{
    router.push({
      name: 'center'
    })
  })
})
</script>
<template>
  <div id="controls">
    <el-popover
        placement="top-start"
        title="地理信息中心"
        :width="400"
        trigger="hover"
    >
      <template #reference>
        <div class='controls-svg'>
          <svg-icon iconName="controls_three" iconClass="icon-controls"/>
        </div>
      </template>
      <el-table :data="gridData">
        <el-table-column label="时间" property="date" />
        <el-table-column label="位置" property="equipment" />
        <el-table-column label="是否告警" property="isWarning" />
      </el-table>
    </el-popover>
  </div>
</template>
<style>
.controls-svg {
  cursor: pointer;
}
.icon-controls {
  width: 6rem;
  height: 6rem;
}
</style>