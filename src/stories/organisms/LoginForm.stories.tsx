import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import LoginForm from '@organisms/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete login form with username/password fields and OAuth social login buttons. The form handles its own validation; submit logic is passed via `onFinish` prop.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: { onFinish: () => {} },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const Loading: Story = {
  args: { loading: true },
};
