import type { Meta, StoryObj } from '@storybook/react-vite';
import AppButton from '@atoms/AppButton';
import AppPopconfirm from '@atoms/AppPopconfirm';

const meta: Meta<typeof AppPopconfirm> = {
  title: 'Atoms/AppPopconfirm',
  component: AppPopconfirm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppPopconfirm>;

export const Default: Story = {
  args: {
    title: 'Delete this item?',
    onConfirm: () => {},
    children: <AppButton danger>Delete</AppButton>,
  },
};
