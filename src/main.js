import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import router from './routes'

import { auth } from './configs/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { createApp } from 'vue'
import App from './App.vue'

let app

onAuthStateChanged(auth, () => {
	if (!app) {
		app = createApp(App).use(router).mount('#app')
	}
})
