import type { Meta, StoryObj } from '@storybook/react-vite';
import AppPagination from '@atoms/AppPagination';

const meta: Meta<typeof AppPagination> = {
  title: 'Atoms/AppPagination',
  component: AppPagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppPagination>;

export const Default: Story = { args: { total: 85, defaultCurrent: 1, pageSize: 10 } };
