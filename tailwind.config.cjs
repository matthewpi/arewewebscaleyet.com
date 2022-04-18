const { fontFamily } = require('tailwindcss/defaultTheme');

/**
 * @type {import('@types/tailwindcss').TailwindConfig}
 */
const config = {
	content: ['./app/**/*.{mdx,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...fontFamily.sans],
				mono: ['Hack', ...fontFamily.mono],
			},

			typography: theme => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.slate[600]'),
						'--tw-prose-headings': theme('colors.slate[900]'),
						'--tw-prose-lead': theme('colors.slate[700]'),
						'--tw-prose-links': theme('colors.blue[600]'),
						'--tw-prose-bold': theme('colors.slate[900]'),
						'--tw-prose-counters': theme('colors.slate[600]'),
						'--tw-prose-bullets': theme('colors.slate[400]'),
						'--tw-prose-hr': theme('colors.slate[300]'),
						'--tw-prose-quotes': theme('colors.slate[900]'),
						'--tw-prose-quote-borders': theme('colors.slate[300]'),
						'--tw-prose-captions': theme('colors.slate[700]'),
						'--tw-prose-code': theme('colors.slate[900]'),
						'--tw-prose-pre-code': theme('colors.slate[100]'),
						'--tw-prose-pre-bg': theme('colors.slate[900]'),
						'--tw-prose-th-borders': theme('colors.slate[300]'),
						'--tw-prose-td-borders': theme('colors.slate[200]'),
						'--tw-prose-invert-body': theme('colors.slate[400]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.slate[300]'),
						'--tw-prose-invert-links': theme('colors.blue[400]'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.slate[400]'),
						'--tw-prose-invert-bullets': theme('colors.slate[600]'),
						'--tw-prose-invert-hr': theme('colors.slate[700]'),
						'--tw-prose-invert-quotes': theme('colors.slate[200]'),
						'--tw-prose-invert-quote-borders': theme('colors.slate[700]'),
						'--tw-prose-invert-captions': theme('colors.slate[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.slate[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.slate[600]'),
						'--tw-prose-invert-td-borders': theme('colors.slate[700]'),
					},
				},

				lg: {
					css: {
						pre: {
							marginTop: 0,
							marginBottom: 0,
							paddingTop: 0,
							paddingRight: 0,
							paddingBottom: 0,
							paddingLeft: 0,
						},
					},
				},
			}),
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
