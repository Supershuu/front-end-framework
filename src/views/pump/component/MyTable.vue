<script setup lang="ts">
import { reactive } from "vue";
const config = reactive({
  header: ['时间', '设备', '原因'],
  data: [
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值'],
    ['2022-03-01 10:11', '1号应力计预警', '应力值超过阈值']
  ],
  index: false,
  align: ['center'],
});
</script>
<template>
  <div class="box">
    <div>
      <div>安全监测</div>
      <div style="height: calc(100% - 35px)">
        <dv-scroll-board :config="config"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss">

</style>