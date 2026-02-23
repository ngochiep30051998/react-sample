import type { Meta, StoryObj } from '@storybook/react-vite';
import Spinner from '@atoms/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Bouncing-dots loading indicator. Used as the Suspense fallback for lazy-loaded routes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
