import type { Meta, StoryObj } from '@storybook/react-vite';
import { Row, Col } from 'antd';
import {
  UserOutlined,
  ShoppingOutlined,
  DollarOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import StatCard from '@molecules/StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    valueColor: { control: 'color' },
    trend: { control: { type: 'range', min: -50, max: 100, step: 0.5 } },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: 'Total Users',
    value: 1240,
    prefix: <UserOutlined style={{ fontSize: 24, color: '#667eea' }} />,
    valueColor: '#667eea',
    trend: 12.5,
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'Growth Rate',
    value: 12.5,
    prefix: <RiseOutlined style={{ fontSize: 24, color: '#ec4899' }} />,
    valueColor: '#ec4899',
    suffix: '%',
  },
};

export const NegativeTrend: Story = {
  args: {
    title: 'Active Sessions',
    value: 842,
    prefix: <UserOutlined style={{ fontSize: 24, color: '#f59e0b' }} />,
    valueColor: '#f59e0b',
    trend: -4.2,
  },
};

export const DashboardRow: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ padding: 24 }}>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Users"
            value={1240}
            prefix={<UserOutlined style={{ fontSize: 24, color: '#667eea' }} />}
            valueColor="#667eea"
            trend={12.5}
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Total Orders"
            value={389}
            prefix={<ShoppingOutlined style={{ fontSize: 24, color: '#10b981' }} />}
            valueColor="#10b981"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Revenue"
            value={45230}
            prefix={<DollarOutlined style={{ fontSize: 24, color: '#f59e0b' }} />}
            valueColor="#f59e0b"
            trend={8.3}
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatCard
            title="Growth Rate"
            value={12.5}
            prefix={<RiseOutlined style={{ fontSize: 24, color: '#ec4899' }} />}
            valueColor="#ec4899"
            suffix="%"
          />
        </Col>
      </Row>
    </div>
  ),
};
