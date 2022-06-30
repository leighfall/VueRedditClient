<template>
  <nav>
    <div class="nav-wrapper">
      <form @submit.prevent="updateSubreddit">
        <div class="input-field">
          <input v-my-directive v-model="searchTerm" ref="subreddit" id="subreddit" class="autocomplete" type="search" autocomplete="off">
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';

import API from '@/API.js';
import { useRouter } from 'vue-router';

let instance;
let debounceTimeout;
const searchTerm = ref('');
const subreddit = ref(null);
const router = useRouter();

const updateSubreddit = () => {
  //todo fix when hitting enter that it doesn't close the autocomplete
  clearTimeout(debounceTimeout);
  router.push({
    name: 'Subreddit',
    params: {
      subreddit: searchTerm.value,
    },
  });
  if (subreddit.value) {
    subreddit.value.blur();
  }
}

const vMyDirective = {
  mounted: () => {
    // eslint-disable-next-line no-undef
    instance = M.Autocomplete.init(subreddit.value, {
      data: {},
      onAutocomplete(result) {
        router.push({
          name: 'Subreddit',
          params: {
            subreddit: result,
          },
        });
      },
    });

    async function getResults() {
      if (searchTerm.value.length < 3) return;

      const response = await API.getPosts('search', {
        q: searchTerm.value,
        type: 'sr',
      });

      const results = response
        .data
        .children
        .reduce((all, child) => {
          if (!child.data.over18) {
            all[child.data.display_name] = null;
          }
          return all;
        }, {});
      instance.updateData(results);
      instance.open();
    }

    watch(() => searchTerm.value, () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        getResults();
      }, 500);
    });
  },
};
</script>