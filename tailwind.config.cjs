const { fontFamily } = require('tailwindcss/defaultTheme');

/**
 * @type {import('@types/tailwindcss').TailwindConfig}
 */
const config = {
	content: ['./app/**/*.{ts,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...fontFamily.sans],
				mono: ['Hack', ...fontFamily.mono],
			},
		},
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};

module.exports = config;
