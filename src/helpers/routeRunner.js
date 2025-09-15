/**
 * @param {import('@nuxt/schema').NuxtApp} nuxtApp
 */
export default ({ $gtm, $router }, config) => {
	// Normalize config, convert all args to arrays
	for (let item of config) {
		if (!Array.isArray(item.args)) {
			item.args = [item.args];
		}
	}

	/**
	 * @param {string} path 
	 */
	function checkRoutes(path) {
		for (const item of config) {
			try {
				if (!item.route.test(path)) continue;

				// Iterate item args
				for (let arg of item.args) {
					$gtm(typeof arg == 'function' ? arg() : arg);
				}
			} catch(err) {
				console.error('routeRunner: route check error', err);
			}
		}
	}

	// Check path on change
	$router.afterEach((to, _, failure) => {
		if (failure) return;

		checkRoutes(to.path);
	});

	// Check current path
	checkRoutes($router.currentRoute.value.path);
}