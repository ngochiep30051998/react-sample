import type { Meta, StoryObj } from '@storybook/react-vite';
import AppButton from '@atoms/AppButton';
import AppResult from '@atoms/AppResult';

const meta: Meta<typeof AppResult> = {
  title: 'Atoms/AppResult',
  component: AppResult,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppResult>;

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Success',
    subTitle: 'Operation completed.',
    extra: <AppButton type="primary">Back</AppButton>,
  },
};
export const Error: Story = {
  args: { status: 'error', title: 'Error', subTitle: 'Something went wrong.' },
};
