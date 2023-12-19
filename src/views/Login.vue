<template>
	<AuthLayout page="login">
		<form class="flex flex-col gap-6 w-full" @submit.prevent="onSubmit">
			<div class="row">
				<label for="email" class="flex flex-col">
					<span class="font-semibold">Email Address</span>
					<input
						type="text"
						id="email"
						placeholder="example@gmail.com"
						class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
						v-model="email"
					/>
				</label>
			</div>
			<div class="row">
				<label for="password" class="flex flex-col">
					<span class="font-semibold">Password</span>
					<input
						type="password"
						id="password"
						placeholder="********"
						class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
						v-model="password"
					/>
				</label>
			</div>
			<div class="row">
				<button
					type="submit"
					:disabled="isPending"
					:class="[
						'button w-full',
						isPending && 'cursor-not-allowed',
					]"
				>
					Login
				</button>
			</div>
		</form>
		<div class="w-full text-left mt-4 text-red-600" v-if="error">
			<span>{{ error }}</span>
		</div>
		<!-- Direction -->
		<div class="text-center w-full mt-6">
			<span class="font-semibold">I'm a new user.</span>
			<span class="ml-1">
				<router-link
					:to="{ name: 'Register', params: {} }"
					class="text-base font-bold hover:underline"
					>Register</router-link
				>
			</span>
		</div>
	</AuthLayout>
</template>

<script setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { ref, watch } from 'vue'
import { useLogin } from '../composables/useLogin'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const { error, isPending, login } = useLogin()

watch([email, password], () => {
	error.value = null
})

const onSubmit = async () => {
	await login(email.value, password.value)

	if (!error.value) {
		await router.push({ name: 'Home' })
	}
}
</script>

<style scoped></style>
