import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import AppButton from '@atoms/AppButton';
import AppModal from '@atoms/AppModal';

const meta: Meta<typeof AppModal> = {
  title: 'Atoms/AppModal',
  component: AppModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppModal>;

export const Default: Story = {
  args: { title: 'Modal', open: true, children: 'Content', onCancel: () => {} },
};

export const WithTrigger: Story = {
  render: function WithTrigger() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <AppButton type="primary" onClick={() => setOpen(true)}>Open</AppButton>
        <AppModal title="Title" open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
          Body content
        </AppModal>
      </>
    );
  },
};
