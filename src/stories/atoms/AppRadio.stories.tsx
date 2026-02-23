import type { Meta, StoryObj } from '@storybook/react-vite';
import AppRadio from '@atoms/AppRadio';
import { Radio } from 'antd';

const meta: Meta<typeof AppRadio> = {
  title: 'Atoms/AppRadio',
  component: AppRadio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppRadio>;

export const Default: Story = {
  args: {
    options: [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
    ],
  },
};
