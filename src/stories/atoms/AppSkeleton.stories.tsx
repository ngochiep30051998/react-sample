import type { Meta, StoryObj } from '@storybook/react-vite';
import AppSkeleton from '@atoms/AppSkeleton';

const meta: Meta<typeof AppSkeleton> = {
  title: 'Atoms/AppSkeleton',
  component: AppSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSkeleton>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };
