import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppInput from '@atoms/AppInput';

const meta: Meta<typeof AppInput> = {
  title: 'Atoms/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['large', 'middle', 'small'] },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AppInput>;

export const Default: Story = { args: { placeholder: 'Enter text...' } };
export const Large: Story = { args: { size: 'large', placeholder: 'Large input' } };
export const WithValue: Story = { args: { placeholder: 'Search...', defaultValue: 'Hello' } };
export const TwoFields: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 280 }}>
      <AppInput placeholder="Username" />
      <AppInput placeholder="Password" type="password" />
    </Space>
  ),
};
