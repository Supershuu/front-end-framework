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
  document.querySelector('#center')?.addEventListener('pointerdown',()=>{

  })
})
</script>
<template>
  <div id="center">
    <el-popover
        placement="top-start"
        title="控制室"
        :width="400"
        trigger="hover"
    >
      <template #reference>
        <div class='center-svg'>
          <svg-icon iconName="center_three" iconClass="icon-center"/>
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
.center-svg {
  cursor: pointer;
}
.icon-center {
  width: 6rem;
  height: 6rem;
}
</style>