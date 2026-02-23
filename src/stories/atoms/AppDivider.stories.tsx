import type { Meta, StoryObj } from '@storybook/react-vite';
import AppDivider from '@atoms/AppDivider';

const meta: Meta<typeof AppDivider> = {
  title: 'Atoms/AppDivider',
  component: AppDivider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppDivider>;

export const Default: Story = {};
export const WithText: Story = { args: { children: 'Section' } };
