import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import StatusTag from '@atoms/StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Atoms/StatusTag',
  component: StatusTag,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

export const Active: Story = { args: { status: 'active' } };
export const Inactive: Story = { args: { status: 'inactive' } };
export const Pending: Story = { args: { status: 'pending' } };
export const Processing: Story = { args: { status: 'processing' } };
export const Shipped: Story = { args: { status: 'shipped' } };
export const Delivered: Story = { args: { status: 'delivered' } };
export const Cancelled: Story = { args: { status: 'cancelled' } };
export const InStock: Story = { args: { status: 'in_stock' } };
export const OutOfStock: Story = { args: { status: 'out_of_stock' } };

export const AllStatuses: Story = {
  render: () => (
    <Space wrap>
      <StatusTag status="active" />
      <StatusTag status="inactive" />
      <StatusTag status="pending" />
      <StatusTag status="processing" />
      <StatusTag status="shipped" />
      <StatusTag status="delivered" />
      <StatusTag status="cancelled" />
      <StatusTag status="in_stock" />
      <StatusTag status="out_of_stock" />
    </Space>
  ),
};

export const CustomColorMap: Story = {
  args: {
    status: 'vip',
    colorMap: { vip: 'gold' },
    labelMap: { vip: 'VIP' },
  },
};
