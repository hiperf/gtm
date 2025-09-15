import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json')));

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '@hiperf/gtm',
	description: 'Simple. Ultra lightweight. GDPR friendly. Google Tag Manager (GTM) module for your [Nuxt](https://nuxt.com/) application. ',
	base: '/gtm/',

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Getting started', link: '/nuxt/getting-started' },
			{ text: version, link: 'https://github.com/hiperf/gtm/blob/main/CHANGELOG.md' },
		],

		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting started', link: '/nuxt/getting-started' },
					{ text: '$initGTM', link: '/nuxt/initialization' },
					{ text: '$gtm', link: '/nuxt/gtm' },
				]
			},
			{
				text: 'Helpers',
				items: [
					{ text: 'Route Runner', link: '/nuxt/route-runner' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/hiperf/gtm' }
		]
	},
});
