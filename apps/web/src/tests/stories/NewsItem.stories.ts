import type { Meta, StoryObj } from '@storybook/vue3'

import { NewsItem } from '#build/components'

const meta = {
	title: 'News/NewsItem',
	component: NewsItem,
	tags: ['autodocs']

} satisfies Meta<typeof NewsItem>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
	args: {
		title: 'Test',
		publish_date: 'abc',
		_id: '641e95a953143be5baf39888'
	}
}
