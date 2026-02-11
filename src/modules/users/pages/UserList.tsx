import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import BaseFilter, { type FilterField } from '@app/components/BaseFilter';
import BaseTable from '@app/components/BaseTable';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockUser } from '@app/mocks/users.mock';
import useUserStore from '../hooks/useUserStore';
import UserFormModal from './UserFormModal';

const FILTER_FIELDS: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search...', width: 200 },
  {
    name: 'status', type: 'select', placeholder: 'Status', width: 120,
    options: [{ value: 'active', label: 'Active' }, { value: 'inactive', label: 'Inactive' }],
  },
];

export default function UserList() {
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const { data, total, loading, fetchList, remove } = useUserStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 10;
  const q = searchParams.get('q') || '';
  const status = searchParams.get('status') || '';

  const load = useCallback(() => {
    fetchList({ page, per_page, q, status });
  }, [fetchList, page, per_page, q, status]);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) { message.success('User deleted'); load(); }
    else message.error('Failed to delete');
  };

  const handleEdit = (id: string) => { setEditingId(id); setModalOpen(true); };
  const handleModalClose = () => { setModalOpen(false); setEditingId(null); load(); };

  const columns: ColumnsType<MockUser> = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    {
      title: 'Status', dataIndex: 'status', key: 'status',
      render: (s: string) => <Tag color={s === 'active' ? 'green' : 'red'}>{s}</Tag>,
    },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Actions', key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" size="small" onClick={() => handleEdit(record.id)}>Edit</Button>
          <Button type="link" size="small" danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <BaseFilter
        fields={FILTER_FIELDS}
        actions={
          <>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => { setEditingId(null); setModalOpen(true); }}>Add User</Button>
            <Button icon={<DownloadOutlined />} onClick={() => exportToExcel(data, `users-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Users')}>Export Excel</Button>
          </>
        }
      />

      <BaseTable<MockUser>
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
        total={total}
        showTotal={(t) => `Total ${t} users`}
      />

      <UserFormModal open={modalOpen} editingId={editingId} onClose={handleModalClose} />
    </div>
  );
}
