<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <SubReddit :topic="subreddit.subreddit"/>
</template>

<script setup>
import subreddit from '@/store/diy.js';
import SubReddit from './SubReddit.vue';
</script>
