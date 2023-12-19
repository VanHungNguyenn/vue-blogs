<script setup>
import { useLogout } from '@/composables/useLogout'
import { useRouter } from 'vue-router'

const router = useRouter()

const { logout, error } = useLogout()

const onLogout = async () => {
	await logout()

	if (!error.value) {
		router.push({ name: 'Login', params: {} })
	}
}

onLogout()
</script>

<style scoped></style>
