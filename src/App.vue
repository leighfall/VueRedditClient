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
}
</style>