import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './router/index.js'

createApp(App).use(router).mount('#app')
