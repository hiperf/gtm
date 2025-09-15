# $gtm

``$gtm`` is a ``shallowRef`` object that is equal to Google Tag Manager (GTM) ``fbq`` object.
You can work with it in the same way as with the original ``fbq``.

### Example

```vue
<script setup>
const { $gtm } = useNuxtApp();

onMounted(() => {
	$gtm.value({
		event: 'pageview',
		page_path: window.location.pathname,
		page_title: document.title
	});
</script>
```
