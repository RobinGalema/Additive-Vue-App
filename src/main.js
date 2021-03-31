import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './data.js';

createApp(App)
    .use(router)
    .mount('#app')
