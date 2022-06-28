import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store';

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

createApp(App).use(router).mount('#app');
//todo go back to beginning of video and find out how store was used.