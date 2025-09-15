<template>
	<div>@hiperf/gtm test</div>
	<button id="button-initialization" @click="initialization">Init GTM</button>
</template>

<script setup>
import { useNuxtApp } from 'nuxt/app';

const { $initGTM, $gtm } = useNuxtApp();

function initialization() {
	$initGTM('123');
	$gtm.value({ event: 'page_view' });
}
</script>
