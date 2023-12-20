import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyDa8kJP_AKmdfRJZnSo9BXgWFJV88Wch9M',
	authDomain: 'vue-blogs-5588c.firebaseapp.com',
	projectId: 'vue-blogs-5588c',
	storageBucket: 'vue-blogs-5588c.appspot.com',
	messagingSenderId: '130616042138',
	appId: '1:130616042138:web:892d35b926e1d81ec4f523',
	measurementId: 'G-0S8B8BY4QN',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { app, analytics, auth, storage }
