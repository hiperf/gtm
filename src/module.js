import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

/**
 * @typedef {Object} GTMDefaults 
 * @property {String} id
 */

/** @type GTMDefaults */
const defaults = {
	id: ''
};

export default defineNuxtModule({
    meta: {
        name: 'gtm',
        configKey: 'gtm',
    },
    defaults,
    setup(options, nuxt) {
        const resolver = createResolver(import.meta.url);

		nuxt.options.runtimeConfig.public.gtm = options;

        addPlugin(resolver.resolve('./runtime/plugin.client'));
    },
});
