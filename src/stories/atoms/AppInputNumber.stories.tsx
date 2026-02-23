import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import AppInputNumber from '@atoms/AppInputNumber';

const meta: Meta<typeof AppInputNumber> = {
  title: 'Atoms/AppInputNumber',
  component: AppInputNumber,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof AppInputNumber>;

export const Default: Story = { args: { placeholder: 'Number', min: 0 } };
export const WithMinMax: Story = { args: { min: 0, max: 100, defaultValue: 50 } };
export const Sizes: Story = {
  render: () => (
    <Space>
      <AppInputNumber size="small" placeholder="Small" />
      <AppInputNumber placeholder="Middle" />
      <AppInputNumber size="large" placeholder="Large" />
    </Space>
  ),
};
