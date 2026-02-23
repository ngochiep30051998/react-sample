import type { Meta, StoryObj } from '@storybook/react-vite';
import DashboardStats from '@organisms/DashboardStats';

const meta: Meta<typeof DashboardStats> = {
  title: 'Organisms/DashboardStats',
  component: DashboardStats,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Row of 4 statistics cards for the dashboard overview. Composed of StatCard molecules.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardStats>;

export const Default: Story = {
  args: {
    totalUsers: 1240,
    totalOrders: 389,
    revenue: 45230,
    growth: 12.5,
  },
};

export const HighGrowth: Story = {
  args: {
    totalUsers: 52000,
    totalOrders: 12400,
    revenue: 987650,
    growth: 34.8,
  },
};

export const LowValues: Story = {
  args: {
    totalUsers: 12,
    totalOrders: 4,
    revenue: 350,
    growth: 2.1,
  },
};
