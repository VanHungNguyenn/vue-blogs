/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgMainColor: '#EFEFEF',
				base: '#3652E1',
				primary: '#1c1c1c',
				secondary: '#424242',
			},
		},
	},
	plugins: [],
}
