# Getting started

## Installation

### Package install

Install `@hiperf/gtm` with your favorite package manager:

::: code-group

```sh [npm]
npm i @hiperf/gtm
```

```sh [yarn]
yarn add @hiperf/gtm
```

```sh [pnpm]
pnpm i @hiperf/gtm
```

```sh [bun]
bun add @hiperf/gtm
```

:::

### Add module to `nuxt.config`

```js
export default defineNuxtConfig({
    modules: ['@hiperf/gtm'],
});
```

## Usage
No Google Tag Manager (GTM) code are injected until you call ``$initGTM``

```vue
<!-- layouts/default.vue or app.vue -->
<script setup>
const { $initGTM, $gtm } = useNuxtApp();

onMounted(() => {
	// Add Google Tag Manager (GTM) tracker code and initialize your tracker
	$initGTM('YOUR-GTM-ID');

	// Start PageView tracking
	$gtm.value('track', 'PageView');
});
</script>
```
