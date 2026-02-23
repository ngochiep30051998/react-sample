import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import {
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DashboardOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import GradientAvatar from '@atoms/GradientAvatar';

const meta: Meta<typeof GradientAvatar> = {
  title: 'Atoms/GradientAvatar',
  component: GradientAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 24, max: 80, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof GradientAvatar>;

export const Default: Story = {
  args: {
    icon: <AppstoreOutlined />,
    size: 40,
  },
};

export const Large: Story = {
  args: {
    icon: <UserOutlined />,
    size: 64,
  },
};

export const Small: Story = {
  args: {
    icon: <SettingOutlined />,
    size: 28,
  },
};

export const AllSizes: Story = {
  render: () => (
    <Space align="center">
      <GradientAvatar icon={<DashboardOutlined />} size={28} />
      <GradientAvatar icon={<AppstoreOutlined />} size={40} />
      <GradientAvatar icon={<ShoppingOutlined />} size={56} />
      <GradientAvatar icon={<UserOutlined />} size={72} />
    </Space>
  ),
};
