import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/configs/firebase'

export const useAppStore = defineStore('app', () => {
	const imageUrl = ref(auth.currentUser?.photoURL || '')

	const updateImageUrl = (url) => {
		imageUrl.value = url
	}

	return {
		imageUrl,
		updateImageUrl,
	}
})
