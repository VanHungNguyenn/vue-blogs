<template>
	<AuthLayout page="register">
		<form class="flex flex-col gap-6 w-full" @submit.prevent="onSubmit">
			<div class="row">
				<label for="fullName" class="flex flex-col">
					<span class="font-semibold">Fullname</span>
					<input
						type="text"
						id="fullName"
						placeholder="John Doe"
						class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
						v-model="fullName"
					/>
				</label>
			</div>
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
					Register
				</button>
			</div>
		</form>
		<div class="w-full text-left mt-4 text-red-600" v-if="error">
			<span>{{ error }}</span>
		</div>
		<!-- Direction -->
		<div class="text-center w-full mt-6">
			<span class="font-semibold">I'm already a member.</span>
			<span class="ml-1">
				<router-link
					:to="{ name: 'Login', params: {} }"
					class="text-base font-bold hover:underline"
					>Login</router-link
				>
			</span>
		</div>
	</AuthLayout>
</template>

<script setup>
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { ref, watch } from 'vue'
import { useRegister } from '../composables/useRegister'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')

const { error, isPending, register } = useRegister()

watch([fullName, email, password], () => {
	error.value = null
})

const onSubmit = async () => {
	await register(email.value, password.value, fullName.value)

	if (!error.value) {
		router.push({ name: 'Login', params: {} })
	}
}
</script>

<style scoped></style>
