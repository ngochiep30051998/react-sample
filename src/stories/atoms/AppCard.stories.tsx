import type { Meta, StoryObj } from '@storybook/react-vite';
import AppCard from '@atoms/AppCard';

const meta: Meta<typeof AppCard> = {
  title: 'Atoms/AppCard',
  component: AppCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppCard>;

export const Default: Story = {
  args: { title: 'Card title', children: 'Card content goes here.' },
};
export const NoHover: Story = {
  args: { hoverable: false, title: 'No hover', children: 'This card does not hover.' },
};
