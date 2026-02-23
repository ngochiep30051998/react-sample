import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppSelect from '@atoms/AppSelect';

const options = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
];

const meta: Meta<typeof AppSelect> = {
  title: 'Atoms/AppSelect',
  component: AppSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'middle', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof AppSelect>;

export const Default: Story = {
  args: { placeholder: 'Select...', options, style: { width: 200 } },
};
export const Large: Story = {
  args: { size: 'large', placeholder: 'Select', options, style: { width: 200 } },
};
export const Multiple: Story = {
  args: { mode: 'multiple', placeholder: 'Select multiple', options, style: { width: 260 } },
};
