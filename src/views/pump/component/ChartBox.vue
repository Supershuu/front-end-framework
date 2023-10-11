<script setup lang="ts">
  import {onMounted} from "vue";
  import * as echarts from 'echarts';
  import type { EChartsOption } from "echarts";

  const props = defineProps<{
    id:string
    option:EChartsOption
  }>();
  onMounted(() => {
    const dom = document.getElementById(`${props.id}`);
    const myChart = echarts.init(dom);
    myChart.setOption(props.option)
    // const myChart = echarts.init(document.getElementById(`${props.id}`));
  })
</script>
<template>
  <div class="box">
    <div :id="props.id"></div>
  </div>
</template>
<style src="../scss/chartBox.scss"></style>