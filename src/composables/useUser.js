import { ref } from 'vue'
import { auth } from '@/configs/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref(null)

onAuthStateChanged(auth, (_user) => {
	user.value = _user
})

const getUser = () => {
	return {
		user,
	}
}

export function useUser() {
	return { getUser }
}
