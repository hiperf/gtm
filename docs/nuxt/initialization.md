# GTM initialization

No *Google Tag Manager* (*GTM*) code are injected until you call ``$initGTM``.

``$initGTM`` inject *Google Tag Manager* (*GTM*) script if it has not been included yet.

### Example

```vue
<script setup>
const { $initGTM, $gtm } = useNuxtApp();

onMounted(() => {
	$initGTM('123'); // Your GTM id
	$gtm.value('track', 'PageView'); // Start tracking
});
</script>
```

To comply with *GDPR* requirements you call ``$initGTM`` only after receiving the necessary permissions from the user.

```vue
<script setup>
const { $initGTM, $gtm } = useNuxtApp();

onMounted(() => {
	// User code to verify consent to use Google Tag Manager (GTM)
	if (cookies.marketing) {
		// Your GTM id
		$initGTM('123'); 

		// Push event to data layer
		$gtm.value({
			event: 'pageview',
			page_path: window.location.pathname,
			page_title: document.title
		});
	}
});
</script>
```

### Type

```js
$initGTM(id: string): void
```
