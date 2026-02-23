import type { Meta, StoryObj } from '@storybook/react-vite';
import AppSteps from '@atoms/AppSteps';

const items = [
  { title: 'Finished', description: 'Step 1' },
  { title: 'In Progress', description: 'Step 2', subTitle: 'Left 00:01:08' },
  { title: 'Waiting', description: 'Step 3' },
];

const meta: Meta<typeof AppSteps> = {
  title: 'Atoms/AppSteps',
  component: AppSteps,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppSteps>;

export const Default: Story = { args: { current: 1, items } };
