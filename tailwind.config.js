/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '100%',
					md: '748px',
					lg: '1004px',
					xl: '1200px',
					'2xl': '1400px',
					'3xl': '1400px',
				},
			},
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},

			colors: {
				primary: '#222840',
				secondary: '#01fe87',
			},
			backgroundImage: {
				hero: "url('https://assets-global.website-files.com/622211af9950a59ad8720d0e/64f1debed815ad419b367a95_kandinsky-download-1687349279192%201.png')",
				web: "url('https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg')",
				computerLearn:
					"url('https://www.guidingtech.com/wp-content/uploads/Top-Ways-to-Disable-Background-Apps-on-Windows-11_4d470f76dc99e18ad75087b1b8410ea9.jpg')",
				computerRepair: "url('https://wallpapercave.com/wp/wp5699160.jpg')",
				tick: "url('/src/assets/tick.svg')",
			},
			content: {
				tick: "url('/src/assets/tick.svg')",
			},
		},
	},
	plugins: [],
};
