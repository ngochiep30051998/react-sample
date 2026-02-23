import type { Meta, StoryObj } from '@storybook/react-vite';
import AppSlider from '@atoms/AppSlider';

const meta: Meta<typeof AppSlider> = {
  title: 'Atoms/AppSlider',
  component: AppSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSlider>;

export const Default: Story = { args: { defaultValue: 50 } };
