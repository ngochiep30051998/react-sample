import type { Meta, StoryObj } from '@storybook/react-vite';
import NotificationBell from '@molecules/NotificationBell';

const meta: Meta<typeof NotificationBell> = {
  title: 'Molecules/NotificationBell',
  component: NotificationBell,
  tags: ['autodocs'],
  args: { onClick: () => {} },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#667eea' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationBell>;

export const WithCount: Story = {
  args: { count: 5 },
};

export const NoNotifications: Story = {
  args: { count: 0 },
};

export const ManyNotifications: Story = {
  args: { count: 99 },
};
