<template>
	<div
		class="flex items-center justify-center"
		style="min-height: calc(100vh - 80px)"
	>
		<div
			class="max-w-[80%] flex items-center justify-end w-full rounded-lg overflow-hidden shadow-lg bg-white px-4 py-20"
		>
			<div
				class="w-1/2 flex items-center justify-center"
				:style="{
					backgroundImage: `url(${contactImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}"
			>
				<img :src="contactImage" alt="contact" />
			</div>
			<div class="w-1/2 flex flex-col">
				<h2 class="text-3xl font-semibold text-gray-800 mb-4">
					Contact
				</h2>
				<p class="text-gray-500 text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, voluptatum.
				</p>
				<div>
					<input
						type="text"
						class="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
						placeholder="Email address"
						v-model="email"
					/>
					<textarea
						class="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
						rows="5"
						placeholder="Message"
						v-model="message"
					></textarea>
					<div class="text-red-500 text-sm mb-4" v-if="error">
						{{ error }}
					</div>
					<button
						class="bg-base text-white px-4 py-2 rounded-md hover:bg-baseHover transition duration-200"
						@click="handleSend"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import contactImage from '@/assets/images/contact.png'
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'

const email = ref('')
const message = ref('')
const error = ref('')

watch([email, message], () => {
	error.value = ''
})

const toast = useToast()

const handleSend = () => {
	if (!email.value) {
		error.value = 'Email is required'
		return
	}

	if (!message.value) {
		error.value = 'Message is required'
		return
	}

	if (!/\S+@\S+\.\S+/.test(email.value)) {
		error.value = 'Email is invalid'
		return
	}

	error.value = ''

	toast.success('Message sent successfully, please check your email!')
}
</script>

<style scoped></style>
