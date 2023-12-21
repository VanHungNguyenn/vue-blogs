import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import router from './routes'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { auth } from './configs/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

let app

onAuthStateChanged(auth, () => {
	if (!app) {
		app = createApp(App)

		const pinia = createPinia()

		app.use(router)
		app.use(Toast, {
			position: 'top-right',
			timeout: 3000,
			closeOnClick: true,
			pauseOnFocusLoss: true,
			pauseOnHover: true,
			draggable: true,
			draggablePercent: 0.7,
			showCloseButtonOnHover: false,
			hideProgressBar: false,
			closeButton: 'button',
			icon: true,
			rtl: false,
		})
		app.use(pinia)
		app.mount('#app')
	}
})
