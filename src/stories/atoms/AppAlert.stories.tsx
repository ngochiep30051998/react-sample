import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppAlert from '@atoms/AppAlert';

const meta: Meta<typeof AppAlert> = {
  title: 'Atoms/AppAlert',
  component: AppAlert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppAlert>;

export const Success: Story = { args: { type: 'success', message: 'Success', showIcon: true } };
export const Info: Story = { args: { type: 'info', message: 'Info', showIcon: true } };
export const Warning: Story = { args: { type: 'warning', message: 'Warning', showIcon: true } };
export const Error: Story = { args: { type: 'error', message: 'Error', showIcon: true } };
export const All: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <AppAlert type="success" message="Success" showIcon />
      <AppAlert type="info" message="Info" showIcon />
      <AppAlert type="warning" message="Warning" showIcon />
      <AppAlert type="error" message="Error" showIcon />
    </Space>
  ),
};
