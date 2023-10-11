<script lang="ts" setup>
  import Water from "@/views/Tag/component/Water.vue";
</script>

<template>
  <div>
    <Water
        :class="{showTag:true}"
        id="water1"
        title="进水总阀"
        status="正常"
        value='111'/>
  </div>
</template>
<style lang="scss">
#water1 {
  background: rgba(255,255,255,0.8);
}
.showTag {
  display: none;
}
</style>