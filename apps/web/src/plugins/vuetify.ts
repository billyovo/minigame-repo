// import this after install `@mdi/font` package
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

const baseColors = {
	primary: '#1F002C',
	secondary: '#6294ff',
	'secondary-lighten': '#92b5ff'
}

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: 'dark',
			themes: {
				dark: {
					colors: {
						...baseColors,
						background: colors.grey.darken4,
						surface: 'rgb(50,50,50)'
					}
				},
				light: {
					colors: {
						...baseColors,
						background: colors.shades.white
					}
				}
			}
		},
		icons: {
			defaultSet: 'fa',
			aliases,
			sets: {
				fa,
				mdi
			}
		}
	})
	app.vueApp.use(vuetify)
})
