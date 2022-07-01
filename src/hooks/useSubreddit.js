import { reactive, watch } from 'vue';
import API from '../API';

export default function useSubreddit(subreddit) {
  const state = reactive({
    loading: false,
    error: '',
    data: null,
  });

  watch(subreddit, async () => {
    state.loading = true;
    state.error = '';
    state.data = null;
    try {
      const data = await API.getSubreddit(subreddit.value);
      state.data = data;
    } catch (error) {
      state.error = error.message;
    } finally {
      setTimeout(() => {
        state.loading = false;
      }, 700)
    }
  },
    { immediate: true }
  );

  state.loading = true;

  return state;
}