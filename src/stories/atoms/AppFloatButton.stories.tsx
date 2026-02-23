import type { Meta, StoryObj } from '@storybook/react-vite';
import AppFloatButton from '@atoms/AppFloatButton';
import { CustomerServiceOutlined } from '@ant-design/icons';

const meta: Meta<typeof AppFloatButton> = {
  title: 'Atoms/AppFloatButton',
  component: AppFloatButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppFloatButton>;

export const Default: Story = {
  args: { icon: <CustomerServiceOutlined />, tooltip: 'Support' },
};
