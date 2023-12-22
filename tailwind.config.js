/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgMainColor: '#FFF',
				base: '#3652E1',
				baseHover: '#2F4ACF',
				primary: '#1c1c1c',
				secondary: '#424242',
			},
		},
	},
	plugins: [],
}
