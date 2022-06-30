<template>
  <div class="home">
    <div v-if="postsState.loading" class="progress red accent-1">
      <div class="indeterminate red accent-3"></div>
    </div>
    <div class="row">
      <div class="col s12">
        <div v-if="postsState.error" class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ postsState.error }}</span>
          </div>
        </div>
        <div class="row">
          <RedditPost v-for="post in posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import RedditPost from './RedditPost.vue';
import usePosts from '../hooks/usePosts.js';

const route = useRoute();
const subreddit = computed(() => `/r/${route.params.subreddit}`);
const postsState = usePosts(subreddit);
const posts = computed(() => postsState.data.filter(child => !child.data.over_18).map((child) => child.data));
</script>