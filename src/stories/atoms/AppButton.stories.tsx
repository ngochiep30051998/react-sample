import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import { PlusOutlined, DownloadOutlined } from '@ant-design/icons';
import AppButton from '@atoms/AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'Atoms/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'default', 'dashed', 'link', 'text'] },
    size: { control: 'select', options: ['large', 'middle', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = { args: { type: 'primary', children: 'Primary' } };
export const Default: Story = { args: { children: 'Default' } };
export const Danger: Story = { args: { danger: true, children: 'Danger' } };
export const Large: Story = { args: { size: 'large', type: 'primary', children: 'Large' } };
export const WithIcon: Story = {
  args: { type: 'primary', icon: <PlusOutlined />, children: 'Add' },
};
export const AllVariants: Story = {
  render: () => (
    <Space wrap>
      <AppButton type="primary">Primary</AppButton>
      <AppButton>Default</AppButton>
      <AppButton type="dashed">Dashed</AppButton>
      <AppButton type="link">Link</AppButton>
      <AppButton danger>Danger</AppButton>
      <AppButton type="primary" icon={<DownloadOutlined />}>Export</AppButton>
    </Space>
  ),
};
