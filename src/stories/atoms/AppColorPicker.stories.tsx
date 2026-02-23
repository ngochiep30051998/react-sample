import type { Meta, StoryObj } from '@storybook/react-vite';
import AppColorPicker from '@atoms/AppColorPicker';

const meta: Meta<typeof AppColorPicker> = {
  title: 'Atoms/AppColorPicker',
  component: AppColorPicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppColorPicker>;

export const Default: Story = {};
