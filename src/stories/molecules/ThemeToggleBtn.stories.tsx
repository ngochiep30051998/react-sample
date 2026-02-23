import type { Meta, StoryObj } from '@storybook/react-vite';
import ThemeToggleBtn from '@molecules/ThemeToggleBtn';

const meta: Meta<typeof ThemeToggleBtn> = {
  title: 'Molecules/ThemeToggleBtn',
  component: ThemeToggleBtn,
  tags: ['autodocs'],
  args: { onToggle: () => {} },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#667eea' },
        { name: 'light', value: '#f5f5f5' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeToggleBtn>;

export const LightMode: Story = {
  args: { isDark: false },
};

export const DarkMode: Story = {
  args: { isDark: false },
};
