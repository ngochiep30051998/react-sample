import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FilterBar, { type FilterField } from '@organisms/FilterBar';

const userFields: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search...', width: 200 },
  {
    name: 'status',
    type: 'select',
    placeholder: 'Status',
    width: 140,
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ],
  },
];

const orderFields: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search orders...', width: 200 },
  {
    name: 'status',
    type: 'select',
    placeholder: 'Status',
    width: 140,
    options: [
      { value: 'pending', label: 'Pending' },
      { value: 'processing', label: 'Processing' },
      { value: 'shipped', label: 'Shipped' },
      { value: 'delivered', label: 'Delivered' },
      { value: 'cancelled', label: 'Cancelled' },
    ],
  },
  { name: 'date', type: 'date', placeholder: 'Created date', width: 160 },
];

const meta: Meta<typeof FilterBar> = {
  title: 'Organisms/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Declarative filter form that syncs field values with URL search params. Supports input, select, number, date, and date-range field types.',
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    onSearch: () => {},
    onReset: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  args: {
    fields: userFields,
  },
};

export const WithActions: Story = {
  args: {
    fields: userFields,
    actions: (
      <Button type="primary" icon={<PlusOutlined />}>
        Add User
      </Button>
    ),
  },
};

export const OrderFilters: Story = {
  args: {
    fields: orderFields,
    actions: <Button>Export</Button>,
  },
};

export const NoButtons: Story = {
  args: {
    fields: userFields,
    showSearch: false,
    showReset: false,
  },
};
