<template>
  <div class="col s12">
    <div class="card post">
      <div v-if="isVideo" class="card-image waves-effect waves-block waves-light">
        <video class="activator video" controls muted autoplay loop>
          <source type="video/mp4" :src="videoUrl" />
        </video>
      </div>
      <div v-if="isImage" class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="post.url" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{ props.post?.title }}</span>
        <p><a :href="`https://www.reddit.com${post.permalink}`">Comments</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  post: Object, 
});

const isVideo = computed(() => (props.post.secure_media && props.post.secure_media.reddit_video));
const isImage = computed(() => props.post.url.match(/webp|png|jpg|jpeg|gif|bmp$/));
const videoUrl = computed(() => {
  if (props.post.secure_media && props.post.secure_media.reddit_video) {
    return props.post.media.reddit_video.fallback_url;
  }
  let parts = [];
  try {
    parts = props.post.url.split('.');
  } catch (error) {
    console.log(error);
  }
  parts.pop();
  return parts.concat('mp4').join('.');
});
</script>

<style scoped>

.post {
  height: 100%;
}
.video {
  width: 100%;
}
</style>