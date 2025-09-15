# Route runner

You can use ``routeRunner`` helper to easy configure trackers by route.

### Example
```vue
<script setup>
import routeRunner from '@hiperf/gtm/routeRunner';

const nuxtApp = useNuxtApp();
const { $initGTM, $gtm } = nuxtApp;

onMounted(() => {
	// Init GTM
	$initGTM('123456');

	routeRunner(nuxtApp, [
		// Tracker will run on /products/** routes
		{ 	
			route: /^\/products(?:\/.*)?$/, // Regular expression that match needed routes
			args: {event: 'products'}
		},

		// Tracker will run on all routes except /products/**
		{
			route: /^(?!\/products(?:\/|$)).+/, 
			args() { return { event: 'page_view', path: window.location.pathname } }
		},

		// Tracker will run on /contacts route
		{
			route: /^\/contacts$/,
			args: [{ event: 'contacts' }]
		},
	]);
});
</script>
```

You can also implement it manually by using ``vue-router`` (useRouter).

### Type

```js
type routeRunnerConfigItem = {
	route: RegExp;
	args: unknown[];
};

interface routeRunner {
	(nuxtApp: NuxtApp, config: routeRunnerConfigItem[]): void;
}
```