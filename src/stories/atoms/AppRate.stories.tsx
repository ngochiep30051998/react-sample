import type { Meta, StoryObj } from '@storybook/react-vite';
import AppRate from '@atoms/AppRate';

const meta: Meta<typeof AppRate> = {
  title: 'Atoms/AppRate',
  component: AppRate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppRate>;

export const Default: Story = { args: { defaultValue: 3 } };
