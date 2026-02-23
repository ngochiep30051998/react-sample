import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppDatePicker from '@atoms/AppDatePicker';

const meta: Meta<typeof AppDatePicker> = {
  title: 'Atoms/AppDatePicker',
  component: AppDatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppDatePicker>;

export const Default: Story = { args: { placeholder: 'Select date' } };
export const WithRange: Story = {
  render: () => (
    <Space>
      <AppDatePicker placeholder="Start" />
      <AppDatePicker placeholder="End" />
    </Space>
  ),
};
