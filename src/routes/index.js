import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () =>
			import(/* webpackChunkName: "home" */ '../views/Home.vue'),
	},
	{
		path: '/articles',
		name: 'Articles',
		component: () =>
			import(/* webpackChunkName: "articles" */ '../views/Articles.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "login" */ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/Register.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
