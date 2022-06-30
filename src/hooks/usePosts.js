import { reactive, watch } from 'vue';
import API from '../API';

export default function usePosts(subreddit, params = {}) {
  
  const postsState = reactive({
    loading: false,
    error: '',
    posts: [],
  });

  async function loadData() {
    try {
      postsState.loading = true;
      postsState.error = '';
      postsState.data = [];

      const response = await API.getPosts(subreddit.value, params);
      postsState.data = response.data.children;
    } catch (error) {
        postsState.error = error.message || 'Error loading posts.';
    } finally {
      postsState.loading = false;
    }
  }

  watch(subreddit, loadData, { immediate: true });

  return postsState;
}