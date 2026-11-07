// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
	devtools: { enabled: true },
	eslint: {
		config: {
			stylistic: { indent: 'tab', commaDangle: 'never' }
		}
	},
	css: ['assets/css/shared.css'],
	site: {
		url: 'https://minigame.letsdream.today'
	},
	build: {
		transpile: ['vuetify', '@vuepic/vue-datepicker']
	},
	pinia: {
		storesDirs: ['./src/stores/**']
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
		'@nuxt/eslint',
		'@nuxtjs/sitemap',
	],
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
	runtimeConfig: {
		public: {
			baseURL: 'https://minigame-api.letsdream.today'
		}
	},
	srcDir: 'src/',
	dir: {
		public: 'src/public'
	},
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
