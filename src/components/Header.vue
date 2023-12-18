<template>
	<div class="border-b border-gray-200 h-[80px] flex items-center">
		<div class="container mx-auto flex justify-between items-center">
			<div class="flex items-center cursor-pointer text-2xl font-bold">
				<span class="text-[#1c1c1c]">VANHUNG</span
				><span class="gradient">BLOG</span>
			</div>
			<div class="flex items-center space-x-10">
				<ul
					class="flex items-center space-x-6 text-[#1c1c1c] font-semibold"
				>
					<li
						class="cursor-pointer transition duration-300 hover:text-base"
						v-for="item in navItems"
						:key="item.name"
						:class="{ 'text-base': isActiveRoute(item.name) }"
					>
						<router-link :to="{ name: item.name, params: {} }">
							{{ item.name }}
						</router-link>
					</li>
				</ul>
				<!-- login and register -->
				<div class="flex items-center space-x-2">
					<router-link :to="{ name: 'Login', params: {} }">
						<button class="button">Login</button>
					</router-link>
					<router-link :to="{ name: 'Register', params: {} }">
						<button class="button">Register</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { NAV_ITEMS } from '@/constants'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const navItems = reactive(NAV_ITEMS)

const route = useRoute()
const isActiveRoute = (name) => {
	return route.name === name
}
</script>

<style scoped>
.gradient {
	background: linear-gradient(
		263deg,
		#7851e9 -1.66%,
		#423ecd 28.39%,
		#3652e1 55.47%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
