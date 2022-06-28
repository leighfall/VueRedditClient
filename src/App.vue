<template>
  <NavBar />
  <RouterView class="container" />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style>
body {
  background-color:  #ffcdd2;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>