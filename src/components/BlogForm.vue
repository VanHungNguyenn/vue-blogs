<template>
	<form @submit.prevent="onSubmit" class="flex flex-col gap-6 w-full">
		<!-- enable -->
		<div class="row">
			<label for="email" class="flex flex-col gap-2">
				<span class="font-semibold">Enable</span>
				<Switch
					v-model="enabled"
					:class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
					class="relative inline-flex h-6 w-11 items-center rounded-full"
				>
					<span class="sr-only">Enable notifications</span>
					<span
						:class="enabled ? 'translate-x-6' : 'translate-x-1'"
						class="inline-block h-4 w-4 transform rounded-full bg-white transition"
					/>
				</Switch>
			</label>
		</div>
		<!-- thumbnail -->
		<div class="row">
			<label for="thumbnail" class="flex flex-col gap-2">
				<span class="font-semibold">Thumbnail</span>
				<div
					@click="triggerFileInput"
					class="w-32 h-32 bg-gray-200 overflow-hidden rounded-lg flex items-center justify-center cursor-pointer"
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
					<img
						v-if="thumbnailUrl"
						:src="thumbnailUrl"
						alt="thumbnail"
						class="w-full h-full object-cover"
					/>
				</div>
			</label>
		</div>
		<!-- title -->
		<div class="row">
			<label for="title" class="flex flex-col gap-2">
				<span class="font-semibold">Title</span>
				<input
					type="text"
					id="title"
					placeholder="Title"
					class="px-4 py-3 rounded-lg border border-gray-100"
					v-model="title"
				/>
			</label>
		</div>
		<!-- description -->
		<div class="row">
			<label for="description" class="flex flex-col gap-2">
				<span class="font-semibold">Description</span>
				<textarea
					rows="2"
					id="description"
					placeholder="Description"
					class="px-4 py-3 rounded-lg border border-gray-100"
					v-model="description"
				></textarea>
			</label>
		</div>

		<!-- submit -->
		<div class="row">
			<button type="submit" class="button w-full">Submit</button>
		</div>
	</form>
</template>

<script setup>
import { CameraIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const enabled = ref(false)
const thumbnailUrl = ref(null)
const title = ref('')
const description = ref('')

const fileInput = ref(null)

const triggerFileInput = () => {
	if (fileInput.value) {
		fileInput.value.click()
	}
}

const onFileChange = (e) => {
	const file = e.target.files[0]

	try {
		if (!file) return

		console.log(file)

		thumbnailUrl.value = URL.createObjectURL(file)
	} catch (e) {
		console.log(e.message)
		toast.error(e.message)
	}
}

const onSubmit = () => {
	console.log(enabled.value)
	console.log(title.value)
	console.log(description.value)
	console.log(thumbnailUrl.value)
}
</script>

<style scoped></style>
