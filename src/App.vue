<template>
  <NavBar />
  <RouterView class="container" />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

const route = useRoute();
const router = useRouter();

if (route.name !== 'Subreddit') {
  router.push({
    name: 'Subreddit',
    params: {
      subreddit: 'kittens'
    },
  });
}
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