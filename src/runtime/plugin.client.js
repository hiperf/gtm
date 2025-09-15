import { defineNuxtPlugin } from '#app';
import { addScript } from './utils';

export default defineNuxtPlugin((nuxtApp) => {
	let scriptInstalled = false;

	window.dataLayer = [];

	/**
	 * initGTM
	 * @param {string|number} [id] - GTM id
	 */
	function initGTM(id) {
		// Add GTM script if it's not installed yet
		if (!scriptInstalled) {
			const computedId = id || nuxtApp.$config.public?.gtm?.id;

			if (!computedId) throw new Error('hiperf/gtm: GTM id is required');

			const script = document.createElement('script');

			script.id = 'hiperf-gtm';
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-${id || nuxtApp.$config.public?.gtm?.id}`;

			window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js' });

			document.body.appendChild(script);

			scriptInstalled = true;
		}
	}
	
	return {
		provide: {
			initGTM,

			/**
			 * Pushes an event or data into Google Tag Manager's dataLayer.
			 *
			 * @function gtm
			 * @param {...any} args - Arguments passed directly to `window.dataLayer.push`.
			 * @example
			 * // Track a button click
			 * $gtm({
			 *     event: "button_click",
			 *     button_id: "buyButton",
			 *     button_text: "Buy"
			 * });
			 */
			gtm() {
				window.dataLayer.push(...arguments);
			}
		}
	};
});