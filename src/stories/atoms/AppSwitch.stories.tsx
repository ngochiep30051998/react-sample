import type { Meta, StoryObj } from '@storybook/react-vite';
import AppSwitch from '@atoms/AppSwitch';

const meta: Meta<typeof AppSwitch> = {
  title: 'Atoms/AppSwitch',
  component: AppSwitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSwitch>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
