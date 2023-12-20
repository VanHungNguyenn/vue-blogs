<template>
	<div>Home</div>
	<div>
		{{ user }}
	</div>
	<div>
		{{ uid }}
	</div>
	<div>
		{{ displayName }}
	</div>
	<div>
		{{ email }}
	</div>
	<div>
		{{ photoURL }}
	</div>
	<div>
		{{ emailVerified }}
	</div>
	<div>
		{{ phoneNumber }}
	</div>
</template>

<script setup>
import { useUser } from '@/composables/useUser'

const { getUser } = useUser()
const { user } = getUser()

const uid = user.value?.uid
const displayName = user.value?.displayName
const email = user.value?.email
const photoURL = user.value?.photoURL
console.log(`photoURL: ${photoURL}`)
const emailVerified = user.value?.emailVerified
const phoneNumber = user.value?.phoneNumber
</script>

<style scoped></style>
