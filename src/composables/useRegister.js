import { ref } from 'vue'
import { auth } from '@/configs/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const register = async (email, password, fullName) => {
	error.value = null
	isPending.value = true

	try {
		if (!email || !password || !fullName)
			throw new Error('Please fill all the fields')

		if (password < 6)
			throw new Error('Password must be at least 6 characters')

		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)

		if (!response) {
			throw new Error('Could not complete the registration')
		}

		if (response.user && fullName) {
			await updateProfile(response.user, { displayName: fullName })
		}

		return response
	} catch (err) {
		console.log(err.message)
		error.value = err.message
	} finally {
		isPending.value = false
	}
}

export function useRegister() {
	return { error, isPending, register }
}
