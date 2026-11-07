import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'vue/html-indent': ['error', 2],
		'vue/no-multiple-template-root': 'off'
	}
})
