import type { Meta, StoryObj } from '@storybook/react-vite';
import AppCheckbox from '@atoms/AppCheckbox';

const meta: Meta<typeof AppCheckbox> = {
  title: 'Atoms/AppCheckbox',
  component: AppCheckbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppCheckbox>;

export const Default: Story = { args: { children: 'Checkbox' } };
export const Checked: Story = { args: { defaultChecked: true, children: 'Checked' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
