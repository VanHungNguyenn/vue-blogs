import { ref } from 'vue'
import { storage } from '@/configs/firebase'
import {
	ref as storageRef,
	uploadBytes,
	getDownloadURL,
} from 'firebase/storage'
import { useUser } from './useUser'

const { getUser } = useUser()
const { user } = getUser()

const useStorage = (name) => {
	const error = ref(null)
	const filePath = ref('')
	const url = ref('')

	const uploadFile = async (file) => {
		error.value = null
		filePath.value = `${name}/${user.value.uid}/${file.name}`

		try {
			const fileRef = storageRef(storage, filePath.value)
			const uploadResult = await uploadBytes(fileRef, file)
			url.value = await getDownloadURL(uploadResult.ref)

			return url.value
		} catch (err) {
			console.log(err.message)
			error.value = err.message
		}
	}

	return { error, filePath, url, uploadFile }
}

export default useStorage
