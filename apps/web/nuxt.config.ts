// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['assets/css/shared.css'],
	site: {
		url: 'https://minigame.letsdream.today'
	},
	build: {
		transpile: ['vuetify', '@vuepic/vue-datepicker']
	},
	pinia: {
		storesDirs: ['./stores/**']
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		'@pinia/nuxt',
		'@nuxt/image',
		'@nuxtjs/eslint-module',
		'nuxt-simple-sitemap',
		"@vite-pwa/nuxt",
		// '@nuxtjs/storybook',
		// '@storybook-vue/nuxt-storybook',
	],
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
		  name: '築夢物語小遊戲',
		  short_name: '小遊戲',
		  theme_color: '#1F002C',
		  icons: [
			{
			  src: 'pwa192.png',
			  sizes: '192x192',
			  type: 'image/png',
			},
			{
			  src: 'pwa512.png',
			  sizes: '512x512',
			  type: 'image/png',
			},
			{
			  src: 'pwa512.png',
			  sizes: '512x512',
			  type: 'image/png',
			  purpose: 'any maskable',
			},
		  ],
		},
		workbox: {
		  globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		client: {
		  installPrompt: true,
		},
	},
	nitro: {
		ignore: ['/record', '/news', '/news/**'],
		prerender: {
			failOnError: false,
			crawlLinks: true
		}
	},
	routeRules: {
		'/**': { swr: true },
		'/news': { ssr: false },
		'/news/**': { ssr: false },
		'/record': { ssr: false }
	},
	storybook: {
		url: 'http://localhost:3001',
		port: 3001
	},
	runtimeConfig: {
		public: {
			baseURL: 'https://minigame-api.letsdream.today'
		}
	},
	srcDir: 'src/',
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
			htmlAttrs: {
				lang: 'zh-Hant'
			},
			title: 'DC 築夢物語 - 綜合伺服器 | 小遊戲',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					name: 'keywords',
					content: 'minecraft, minigame, 當個創世神, 築夢物語, 築夢物語伺服器, 小遊戲'
				},
				{
					name: 'description',
					content: '在這裡你可以查詢到我們築夢物語小遊戲的資訊。'
				},
				{
					name: 'og:type',
					content: 'website'
				},
				{
					name: 'og:url',
					content: 'https://minigame.letsdream.today'
				},
				{
					name: 'og:title',
					content: 'DC 築夢物語 - 綜合伺服器 | 小遊戲'
				},
				{
					name: 'og:description',
					content: '在這裡你可以查詢到我們築夢物語小遊戲的資訊。'
				},
				{
					name: 'og:image',
					content: 'https://minigame.letsdream.today/images/background/avatar.png'
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					name: 'twitter:url',
					content: 'https://minigame.letsdream.today'
				},
				{
					name: 'twitter:title',
					content: 'DC 築夢物語 - 綜合伺服器 | 小遊戲'
				},
				{
					name: 'twitter:description',
					content: '在這裡你可以查詢到我們築夢物語小遊戲的資訊。'
				},
				{
					name: 'twitter:image',
					content: 'https://minigame.letsdream.today/images/background/avatar.png'
				}
			]
		}
	}
})
