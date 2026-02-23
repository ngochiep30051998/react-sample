import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppProgress from '@atoms/AppProgress';

const meta: Meta<typeof AppProgress> = {
  title: 'Atoms/AppProgress',
  component: AppProgress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppProgress>;

export const Line: Story = { args: { percent: 60 } };
export const Circle: Story = { args: { type: 'circle', percent: 75 } };
export const Variants: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 300 }}>
      <AppProgress percent={30} />
      <AppProgress percent={70} status="exception" />
      <AppProgress percent={100} />
    </Space>
  ),
};
