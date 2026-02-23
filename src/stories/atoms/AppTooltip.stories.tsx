import type { Meta, StoryObj } from '@storybook/react-vite';
import AppButton from '@app/components/atoms/AppButton';
import AppTooltip from '@app/components/atoms/AppTooltip';

const meta: Meta<typeof AppTooltip> = {
  title: 'Atoms/AppTooltip',
  component: AppTooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppTooltip>;

export const Default: Story = {
  args: { title: 'Tooltip text', children: <AppButton>Hover me</AppButton> },
};
