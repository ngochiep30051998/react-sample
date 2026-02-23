import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space } from 'antd';
import { Scope } from '@app/enums';
import ScopeTag from '@atoms/ScopeTag';

const meta: Meta<typeof ScopeTag> = {
  title: 'Atoms/ScopeTag',
  component: ScopeTag,
  tags: ['autodocs'],
  argTypes: {
    scope: {
      control: 'select',
      options: Object.values(Scope),
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScopeTag>;

export const GET: Story = { args: { scope: Scope.GET } };
export const POST: Story = { args: { scope: Scope.POST } };
export const PUT: Story = { args: { scope: Scope.PUT } };
export const DELETE: Story = { args: { scope: Scope.DELETE } };
export const PATCH: Story = { args: { scope: Scope.PATCH } };

export const AllScopes: Story = {
  render: () => (
    <Space wrap>
      {Object.values(Scope).map((scope) => (
        <ScopeTag key={scope} scope={scope} />
      ))}
    </Space>
  ),
};
