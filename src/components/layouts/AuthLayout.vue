<template>
	<div class="flex flex-col pt-20">
		<div class="w-[100px] text-center mx-auto">
			<img
				src="../../assets/images/logo.svg"
				alt="logo"
				class="object-cover w-full"
			/>
		</div>
		<div class="text-center mt-10">
			<h1 class="font-bold text-[24px] text-dark">
				{{
					page === 'login'
						? 'Please login to your account!'
						: 'Create a new account to get started!'
				}}
			</h1>
		</div>
		<div
			class="flex flex-col items-center justify-center w-full max-w-[700px] mx-auto mt-10"
		>
			<slot />
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	page: {
		type: String,
		default: 'login',
	},
})
</script>

<style scoped></style>
