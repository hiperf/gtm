<template>
	<header>
		<menu>
			<NuxtLink to="/">index</NuxtLink>
			<NuxtLink to="/about">about</NuxtLink>
			<NuxtLink to="/contacts">contacts</NuxtLink>
			<NuxtLink to="/error">error</NuxtLink>
		</menu>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<p>
			<button @click="initialize">Init GTM</button> - @hiperf/gtm playground
		</p>
		
		<p>
			<button @click="dispatchEvent">Dispatch "pageview" event</button>
		</p>
	</footer>
</template>

<script setup>
import routeRunner from '@hiperf/gtm/routeRunner';

const nuxtApp = useNuxtApp();
const { $initGTM, $gtm } = useNuxtApp();

function initialize() {
	$initGTM();
}

function dispatchEvent() {
	$gtm({
		event: 'pageview',
		pagePath: window.location.pathname
	});
}

onMounted(() => {
	routeRunner(nuxtApp, [
		// Tracker will run on /about/** routes
		{ 	
			route: /^\/about(?:\/.*)?$/, // Regular expression that match needed routes
			args: [{event: 'about'}]
		},

		// Tracker will run on all routes except /about/**
		{
			route: /^(?!\/about(?:\/|$)).+/, 
			args() { return { event: 'page_view', path: window.location.pathname } }
		},

		// Tracker will run on /contacts route
		{
			route: /^\/contacts$/,
			args: [{
					event: 'contacts'
			}]
		},
	]);
});
</script>

<style>
body {
	margin: 0;
	padding: 1rem;
	color: #000;
}

a { color: inherit; }
menu { padding: 0; }
menu a { margin-right: 1rem; }
menu a.router-link-active {
	opacity: 1;
	color: #007b48;
}

main {
	padding: 1rem 0;
}

h1 {
	margin: 0 0 1rem 0;
}
</style>
