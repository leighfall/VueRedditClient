<template>
  <nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input v-my-directive @blur="updateSubreddit" v-model="searchTerm" ref="subreddit" id="subreddit" class="autocomplete" type="search" required>
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
import state from '@/store/diy.js';

const searchTerm = ref('');
const subreddit = ref(null);

const vMyDirective = {
  mounted: () => {
    // eslint-disable-next-line no-undef
    const instance = M.Autocomplete.init(subreddit.value, {
      data: {},
      onAutocomplete(result) {
        state.subreddit.value = `r/${result}`;
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
      console.log(results) //fixme
      instance.updateData(results);
      instance.open();
    }

    let debounceTimeout;
    watch(() => searchTerm.value, () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        getResults();
      }, 500);
    });
  },
};
</script>