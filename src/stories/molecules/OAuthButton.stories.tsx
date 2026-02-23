import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import OAuthButton from '@molecules/OAuthButton';
import { GoogleIcon, FacebookIcon } from '@app/assets/icons';

const meta: Meta<typeof OAuthButton> = {
  title: 'Molecules/OAuthButton',
  component: OAuthButton,
  tags: ['autodocs'],
  args: { onClick: () => {} },
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof OAuthButton>;

export const Google: Story = {
  args: {
    icon: <GoogleIcon />,
    label: 'Sign in with Google',
  },
};

export const Facebook: Story = {
  args: {
    icon: <FacebookIcon />,
    label: 'Sign in with Facebook',
  },
};

export const BothButtons: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 360 }}>
      <OAuthButton icon={<GoogleIcon />} label="Sign in with Google" />
      <OAuthButton icon={<FacebookIcon />} label="Sign in with Facebook" />
    </Space>
  ),
};
