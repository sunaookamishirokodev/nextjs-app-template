import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export const colors = {
	'primary-100': '#121113',
	'primary-200': '#222725',
	'secondary-100': '#f7f7f2',
	'secondary-200': '#e4e6c3',
	main: '#678AB7',
};

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors,
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.backface-visible': {
					'backface-visibility': 'visible',
					'-moz-backface-visibility': 'visible',
					'-webkit-backface-visibility': 'visible',
					'-ms-backface-visibility': 'visible',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
					'-moz-backface-visibility': 'hidden',
					'-webkit-backface-visibility': 'hidden',
					'-ms-backface-visibility': 'hidden',
				},
			});
		}),
	],
};
export default config;
