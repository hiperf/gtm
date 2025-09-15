import { fileURLToPath } from 'node:url';
import { describe, test, expect } from 'vitest';
import { setup, $fetch, createPage, url } from '@nuxt/test-utils/e2e';

describe('basic tests', async () => {
	await setup({
		rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
		browser: true,
	});

	test('Renders index page with @hiperf/gtm module', async () => {
		const html = await $fetch('/');
		expect(html).toContain('<div>@hiperf/gtm test</div>');
	});

	test('Test GTM init by button click', async () => {
		const page = await createPage();

		await page.goto(url('/'), { waitUntil: 'hydration' });
		await page.click('#button-initialization');
		await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

		const isArray = await page.evaluate(() => {
			return Array.isArray(window?.dataLayer);
		});

		expect(isArray).toBe(true);
	}, 10000);
});