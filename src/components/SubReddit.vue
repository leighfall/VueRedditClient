<template>
  <div class="subreddit">
    <div class="info">
      <div v-if="subredditState.loading" class="loading">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-red-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="subredditState.error" class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ subredditState.error }}</span>
        </div>
      </div>
      <div v-if="!subredditState.error && !subredditState.loading" class="card">
        <div class="card-image">
          <img :src="subredditState.data.banner_img" />
        </div>
        <div class="card-content banner">
          <div v-if="subredditState.data.icon_img" class="icon">
            <img class="circle img" :src="subredditState.data.icon_img" />
          </div>
          <div>
            <span class="card-title">{{ subredditState.data.display_name_prefixed }}</span>
            <span class="card-title">{{ subredditState.data.title }}</span>
            <p>{{ subredditState.data.public_description }}</p>
            <br />
            <p>{{ subredditState.data.active_user_count }} of {{ subredditState.data.subscribers }} are here.</p>
          </div>
        </div>
      </div>
    </div>
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
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import RedditPost from './RedditPost.vue';
import usePosts from '../hooks/usePosts.js';
import useSubreddit from '@/hooks/useSubreddit.js'

const route = useRoute();
const subreddit = computed(() => `/r/${route.params.subreddit}`);
const postsState = usePosts(subreddit);
const subredditState = useSubreddit(subreddit);
const posts = computed(() => postsState.data.filter(child => !child.data.over_18).map((child) => child.data));

watch(subredditState, () => {
  document.title = subredditState.data?.title || subreddit.value;
}, { immediate: true });
</script>

<style scoped>



.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem;
}
.banner {
display: flex;
justify-content: flex-start;
}
.icon {
  flex: 1;
  max-width: 10%;
}

.img {
  height: 50px;
  margin-right: 2rem;
}
</style>