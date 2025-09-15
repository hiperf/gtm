import { defineConfig } from 'rolldown';

export default defineConfig({
	input: 'src/helpers/routeRunner.js',
	output: {
		file: 'dist-helpers/routeRunner.mjs',
		format: 'es',
		minify: true
	},
});