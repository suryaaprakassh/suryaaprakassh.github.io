/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#091a2e",
			},
			fontFamily: {
				chivo: ["Chivo Mono", "cursive"],
				poppins: ["Poppins", "cursive"],
				roboto: ["Roboto", "cursive"],
			},
		},
	},
	plugins: [],
};
