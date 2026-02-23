import type { Meta, StoryObj } from '@storybook/react-vite';
import AppTabs from '@atoms/AppTabs';

const items = [
  { key: '1', label: 'Tab 1', children: 'Content 1' },
  { key: '2', label: 'Tab 2', children: 'Content 2' },
  { key: '3', label: 'Tab 3', children: 'Content 3' },
];

const meta: Meta<typeof AppTabs> = {
  title: 'Atoms/AppTabs',
  component: AppTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppTabs>;

export const Default: Story = { args: { items } };
