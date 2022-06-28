<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <SubReddit :topic="state.subreddit"/>
</template>

<script setup>
import state from '@/store/diy';
import SubReddit from './SubReddit.vue';
</script>
