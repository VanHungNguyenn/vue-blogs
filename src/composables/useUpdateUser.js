import { ref } from 'vue'
import { auth } from '@/configs/firebase'
import { updateProfile } from 'firebase/auth'

const error = ref(null)

const updatePhotoUser = async (photoURL) => {
	error.value = null

	try {
		const user = auth.currentUser
		await updateProfile(user, { photoURL })
		error.value = null
		return user
	} catch (err) {
		console.log(err.message)
		error.value = err.message
	}
}

export const useUpdateUser = () => {
	return { error, updatePhotoUser }
}
