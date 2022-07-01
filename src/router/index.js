import { createRouter, createWebHistory } from 'vue-router'
import Subreddit from '../components/SubReddit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/r/:subreddit',
      name: 'Subreddit',
      component: Subreddit,
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Subreddit' ) next({ 
    name: 'Subreddit', 
    Params: {
      subreddit: 'kittens',
    },
  })
  else next();
});

export default router
