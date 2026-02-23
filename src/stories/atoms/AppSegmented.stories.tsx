import type { Meta, StoryObj } from '@storybook/react-vite';
import AppSegmented from '@atoms/AppSegmented';

const meta: Meta<typeof AppSegmented> = {
  title: 'Atoms/AppSegmented',
  component: AppSegmented,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSegmented>;

export const Default: Story = {
  args: { options: ['List', 'Kanban', 'Table'] },
};
