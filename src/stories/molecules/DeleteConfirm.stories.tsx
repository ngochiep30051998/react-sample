import type { Meta, StoryObj } from '@storybook/react-vite';
import DeleteConfirm from '@molecules/DeleteConfirm';

const meta: Meta<typeof DeleteConfirm> = {
  title: 'Molecules/DeleteConfirm',
  component: DeleteConfirm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeleteConfirm>;

export const Default: Story = { args: { onConfirm: () => {} } };
export const CustomTitle: Story = {
  args: { title: 'Delete this user?', onConfirm: () => {} },
};
