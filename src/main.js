import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import router from './routes'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
