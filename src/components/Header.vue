<template>
	<div class="border-b border-gray-200 h-[80px] flex items-center">
		<div class="container mx-auto flex justify-between items-center">
			<router-link :to="{ name: 'Home', params: {} }">
				<div
					class="flex items-center cursor-pointer text-2xl font-bold"
				>
					<span class="text-[#1c1c1c]">VANHUNG</span
					><span class="gradient">BLOG</span>
				</div>
			</router-link>
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
				<div class="flex items-center space-x-2" v-if="!user">
					<router-link :to="{ name: 'Login', params: {} }">
						<button class="button">Login</button>
					</router-link>
					<router-link :to="{ name: 'Register', params: {} }">
						<button class="button">Register</button>
					</router-link>
				</div>
				<!-- avatar and name -->
				<Menu
					v-if="user"
					as="div"
					class="relative inline-block text-left"
				>
					<div>
						<MenuButton>
							<div
								v-if="user"
								class="flex items-center space-x-2 cursor-pointer"
							>
								<span class="text-base font-semibold">{{
									user.displayName
								}}</span>
								<!-- user.photoURL or @/assets/images/avatar.jpg -->
								<img
									:src="getImageUrl(user.photoURL)"
									alt="avatar"
									class="w-10 h-10 rounded-full"
								/>
							</div>
						</MenuButton>
					</div>
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-in"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems
							class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
						>
							<router-link :to="{ name: 'Profile', params: {} }">
								<div class="px-1 py-1">
									<MenuItem v-slot="{ active }">
										<button
											:class="[
												active
													? 'bg-base text-white'
													: 'text-gray-900',
												'group flex w-full items-center rounded-md px-2 py-2 text-sm',
											]"
										>
											Profile
										</button>
									</MenuItem>
								</div>
							</router-link>
							<router-link :to="{ name: 'Create', params: {} }">
								<div class="px-1 py-1">
									<MenuItem v-slot="{ active }">
										<button
											:class="[
												active
													? 'bg-base text-white'
													: 'text-gray-900',
												'group flex w-full items-center rounded-md px-2 py-2 text-sm',
											]"
										>
											Create new blog
										</button>
									</MenuItem>
								</div>
							</router-link>
							<router-link :to="{ name: 'Logout', params: {} }">
								<div class="px-1 py-1">
									<MenuItem v-slot="{ active }">
										<button
											:class="[
												active
													? 'bg-red-500 text-white'
													: 'text-gray-900',
												'group flex w-full items-center rounded-md px-2 py-2 text-sm',
											]"
										>
											Logout
										</button>
									</MenuItem>
								</div>
							</router-link>
						</MenuItems>
					</transition>
				</Menu>
			</div>
		</div>
	</div>
</template>

<script setup>
import { NAV_ITEMS } from '@/constants'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useUser } from '@/composables/useUser'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import avatarDefault from '@/assets/images/avatar.jpg'

const navItems = reactive(NAV_ITEMS)

const route = useRoute()
const isActiveRoute = (name) => {
	return route.name === name
}

const { getUser } = useUser()
const { user } = getUser()

const getImageUrl = (url) => {
	return url || avatarDefault
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
