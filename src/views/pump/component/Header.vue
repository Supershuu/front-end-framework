<script setup lang="ts">
  import {useClock} from "@/utils/Clock";

  const time = useClock();
</script>

<template>
  <div class="home-header">
    <div class="home-title">
      <div>吕家沟智慧水利系统</div>
    </div>
  </div>
  <div class="home-info">
    <div>{{time}}</div>
  </div>
</template>

<style src="../scss/header.scss"></style>