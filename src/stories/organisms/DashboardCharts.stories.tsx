import type { Meta, StoryObj } from '@storybook/react-vite';
import DashboardCharts from '@organisms/DashboardCharts';

const weeklyData = [
  { name: 'Mon', users: 120, orders: 45 },
  { name: 'Tue', users: 198, orders: 72 },
  { name: 'Wed', users: 156, orders: 58 },
  { name: 'Thu', users: 234, orders: 89 },
  { name: 'Fri', users: 189, orders: 67 },
  { name: 'Sat', users: 278, orders: 112 },
  { name: 'Sun', users: 145, orders: 54 },
];

const monthlyData = [
  { name: 'Jan', users: 1200, orders: 450 },
  { name: 'Feb', users: 1580, orders: 620 },
  { name: 'Mar', users: 1320, orders: 510 },
  { name: 'Apr', users: 1870, orders: 730 },
  { name: 'May', users: 2100, orders: 890 },
  { name: 'Jun', users: 1950, orders: 780 },
];

const meta: Meta<typeof DashboardCharts> = {
  title: 'Organisms/DashboardCharts',
  component: DashboardCharts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Side-by-side bar chart and line chart for tracking user and order trends.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardCharts>;

export const Weekly: Story = {
  args: { data: weeklyData },
};

export const Monthly: Story = {
  args: { data: monthlyData },
};
