<template>
	<div>Home</div>
	<div>
		{{ user }}
	</div>
</template>

<script setup>
import { useUser } from '@/composables/useUser'

const { getUser } = useUser()
const { user } = getUser()

console.log('user', user.value)
</script>

<style scoped></style>
