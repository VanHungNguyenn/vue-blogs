import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import { auth } from '@/configs/firebase'

// auth guards
const requireAuth = (to, from, next) => {
	const user = auth.currentUser

	if (!user) {
		next({
			name: 'Login',
			params: {},
		})
	} else {
		next()
	}
}

const requireNoAuth = (to, from, next) => {
	const user = auth.currentUser

	if (user) {
		next({
			name: 'Home',
			params: {},
		})
	} else {
		next()
	}
}

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
		beforeEnter: requireNoAuth,
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/Register.vue'),
		beforeEnter: requireNoAuth,
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () =>
			import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
		beforeEnter: requireAuth,
	},
	{
		path: '/create-blog',
		name: 'Create',
		component: () =>
			import(/* webpackChunkName: "create" */ '../views/CreateBlog.vue'),
		beforeEnter: requireAuth,
	},
	{
		path: '/logout',
		name: 'Logout',
		component: () =>
			import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
		beforeEnter: requireAuth,
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
