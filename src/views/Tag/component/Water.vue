<script setup lang="ts">
import {onMounted,ref} from "vue";
import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";
const router = useRouter();

onMounted(() => {
  document.querySelector('#water')?.addEventListener('pointerdown',()=>{
    console.log(window);
    console.log(router);
  })
})
const props = defineProps({
  title: String,
  status: String,
  value: String
});
const labelPosition = ref('left');
const isClose = ref(false);
const handleClick = () => {
  isClose.value = !isClose.value;
}

</script>
<template>
  <div id="$attrs.id" >
     <el-form
         :label-position="labelPosition"
         label-width="100px"
         :model="props"
         style="max-width: 460px"
     >
       <el-form-item label="状态：">
         <el-text>{{props.status}}</el-text>
       </el-form-item>
       <el-form-item label="流量数值">
         <el-text>{{props.value}}</el-text>
       </el-form-item>
       <el-form-item label="控制">
         <el-button @mousedown="handleClick">{{isClose ? '开启':'关闭'}}</el-button>
       </el-form-item>
     </el-form>
  </div>
</template>
<style>
.water-svg {
  cursor: pointer;
}
.icon-fang {
  width: 6rem;
  height: 6rem;
}
</style>