<template>
	<div class="mt-4 text-dark font-semibold text-xl">Profile</div>
	<div class="flex flex-col gap-4">
		<div
			class="flex flex-col items-center justify-center mt-4 bg-white p-4 rounded-md shadow-md"
		>
			<div
				class="relative flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 shadow-md mb-3"
			>
				<img
					class="w-full h-full rounded-full object-cover"
					:src="getImageUrl(imageURL)"
					alt="logo"
				/>
				<div
					class="absolute bottom-0 right-0 flex items-center rounded-full bg-white shadow-md p-1 cursor-pointer"
					@click="triggerFileInput"
				>
					<CameraIcon class="w-6 h-6 text-gray-400" />
					<input
						type="file"
						class="hidden"
						accept="image/*"
						aria-label="Upload Image"
						id="fileInput"
						ref="fileInput"
						@change="onFileChange"
					/>
				</div>
			</div>
			<div class="text-xl text-base font-semibold">
				{{ user.displayName }}
			</div>
			<div class="text-gray-400">{{ user.email }}</div>
		</div>
	</div>
</template>

<script setup>
import { CameraIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useStorage } from '@/composables/useStorage'
import { updateProfile } from 'firebase/auth'
import { auth } from '@/configs/firebase'
import avatarDefault from '@/assets/images/avatar.jpg'
import { useUser } from '@/composables/useUser'
import { useToast } from 'vue-toastification'

const toast = useToast()

const { getUser } = useUser()
const { user } = getUser()

const getImageUrl = (url) => {
	return url || avatarDefault
}
const imageURL = ref(user.value.photoURL)

const { uploadFile } = useStorage('avatars')

const fileInput = ref(null)

const triggerFileInput = () => {
	if (fileInput.value) {
		fileInput.value.click()
	}
}

const onFileChange = async (e) => {
	const file = e.target.files[0]
	try {
		if (!file) return

		const url = await uploadFile(file)

		await updateProfile(auth.currentUser, {
			photoURL: url,
		})

		imageURL.value = url

		toast.success('Avatar updated successfully')
	} catch (e) {
		console.log(e.message)
		toast.error(e.message)
	}
}
</script>

<style scoped></style>
