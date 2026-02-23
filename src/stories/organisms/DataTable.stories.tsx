import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router';
import type { ColumnsType } from 'antd/es/table';
import DataTable from '@organisms/DataTable';
import StatusTag from '@atoms/StatusTag';
import ActionButtons from '@molecules/ActionButtons';

interface SampleRow {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

const sampleData: SampleRow[] = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: i % 3 === 0 ? 'inactive' : 'active',
  createdAt: `2024-0${(i % 9) + 1}-01`,
}));

const columns: ColumnsType<SampleRow> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s: string) => <StatusTag status={s} />,
  },
  { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
  {
    title: 'Actions',
    key: 'actions',
    render: () => <ActionButtons onEdit={() => {}} onDelete={() => {}} />,
  },
];

const meta: Meta<typeof DataTable<SampleRow>> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Paginated table that syncs current page and page size with URL search params. Drop-in replacement for Ant Design Table with built-in pagination.',
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
};

export default meta;
type Story = StoryObj<typeof DataTable<SampleRow>>;

export const Default: Story = {
  args: {
    columns,
    dataSource: sampleData,
    rowKey: 'id',
    total: sampleData.length,
  },
};

export const Loading: Story = {
  args: {
    columns,
    dataSource: [],
    rowKey: 'id',
    loading: true,
    total: 0,
  },
};

export const Empty: Story = {
  args: {
    columns,
    dataSource: [],
    rowKey: 'id',
    total: 0,
  },
};

export const HiddenPagination: Story = {
  args: {
    columns,
    dataSource: sampleData.slice(0, 5),
    rowKey: 'id',
    hidePagination: true,
  },
};
