import type { Meta, StoryObj } from '@storybook/react-vite';
import ActionButtons from '@molecules/ActionButtons';

const meta: Meta<typeof ActionButtons> = {
  title: 'Molecules/ActionButtons',
  component: ActionButtons,
  tags: ['autodocs'],
  args: {
    onEdit: () => {},
    onDelete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof ActionButtons>;

export const Default: Story = {};

export const CustomLabels: Story = {
  args: {
    editLabel: 'Update Status',
    deleteLabel: 'Remove',
  },
};

export const EditOnly: Story = {
  args: {
    showDelete: false,
  },
};

export const DeleteOnly: Story = {
  args: {
    showEdit: false,
  },
};
