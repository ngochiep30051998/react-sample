import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  DashboardOutlined,
  ShoppingOutlined,
  BellOutlined,
} from '@ant-design/icons';
import AppIcon from '@atoms/AppIcon';

const meta: Meta<typeof AppIcon> = {
  title: 'Atoms/AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof AppIcon>;

export const Default: Story = {
  args: {
    icon: <UserOutlined />,
    size: 20,
  },
};

export const Colored: Story = {
  args: {
    icon: <BellOutlined />,
    size: 24,
    color: '#667eea',
  },
};

export const AllSizes: Story = {
  render: () => (
    <Space align="center">
      <AppIcon icon={<DashboardOutlined />} size={14} color="#667eea" />
      <AppIcon icon={<ShoppingOutlined />} size={20} color="#10b981" />
      <AppIcon icon={<UserOutlined />} size={28} color="#f59e0b" />
      <AppIcon icon={<SettingOutlined />} size={36} color="#ec4899" />
    </Space>
  ),
};
