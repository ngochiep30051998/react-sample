import type { Meta, StoryObj } from '@storybook/react-vite';
import AppEmpty from '@atoms/AppEmpty';

const meta: Meta<typeof AppEmpty> = {
  title: 'Atoms/AppEmpty',
  component: AppEmpty,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppEmpty>;

export const Default: Story = {};
export const CustomDescription: Story = {
  args: { description: 'No items found' },
};
