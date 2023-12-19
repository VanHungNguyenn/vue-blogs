import { ref } from 'vue'
import { auth } from '@/configs/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
	error.value = null
	isPending.value = true

	try {
		const response = await signInWithEmailAndPassword(auth, email, password)

		if (!response) throw new Error(`Authentication failed!`)

		return response
	} catch (err) {
		console.log(err.message)
		error.value = err.message
	} finally {
		isPending.value = false
	}
}

export function useLogin() {
	return { error, isPending, login }
}
