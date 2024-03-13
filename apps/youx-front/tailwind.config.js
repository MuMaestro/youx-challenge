// const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
// const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,css}'
  ],
  theme: {
    extend: {
		colors: {
			'black-rose': {
				'50': '#fdf2f7',
				'100': '#fbe8f2',
				'200': '#f9d1e5',
				'300': '#f5accf',
				'400': '#ee78ae',
				'500': '#e54f8f',
				'600': '#d32f6d',
				'700': '#b62054',
				'800': '#971d46',
				'900': '#691833',
				'950': '#4d0a20',
			},
			'old-rose': {
				'50': '#fbf6f5',
				'100': '#f7edec',
				'200': '#f0dbdb',
				'300': '#e4bebd',
				'400': '#d49898',
				'500': '#c78283',
				'600': '#a9555a',
				'700': '#8d4349',
				'800': '#773a41',
				'900': '#67343c',
				'950': '#38191d',
			},
			'vanilla-ice': {
				'50': '#fbf5f6',
				'100': '#f8e8ea',
				'200': '#f3d9dc',
				'300': '#e8b9be',
				'400': '#d99098',
				'500': '#c86b76',
				'600': '#b2505b',
				'700': '#95404a',
				'800': '#7c3840',
				'900': '#68343a',
				'950': '#37181c',
			},
			'vanilla': {
				'50': '#f9f6f3',
				'100': '#f2eae2',
				'200': '#e4d4c4',
				'300': '#d7bea8',
				'400': '#c09577',
				'500': '#b37c5c',
				'600': '#a56a51',
				'700': '#8a5644',
				'800': '#70473c',
				'900': '#5b3b33',
				'950': '#301e1a',
			},
			'quicksand': {
				'50': '#faf7f6',
				'100': '#f4eeec',
				'200': '#ebe1dd',
				'300': '#ddcbc4',
				'400': '#c7aca2',
				'500': '#b49286',
				'600': '#9a7568',
				'700': '#806055',
				'800': '#6c5148',
				'900': '#5c4740',
				'950': '#30231f',
			},
		}
	},
  },
  plugins: [],
};
