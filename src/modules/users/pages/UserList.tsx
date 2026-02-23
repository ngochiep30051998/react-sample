import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { PERMISSIONS } from '@configs/rbac.config';
import { useHasPermission, useHasAnyPermission } from '@app/hooks/useHasPermission';
import FilterBar, { type FilterField } from '@organisms/FilterBar';
import DataTable from '@organisms/DataTable';
import UserFormModal from '@organisms/UserFormModal';
import StatusTag from '@atoms/StatusTag';
import ActionButtons from '@molecules/ActionButtons';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockUser } from '@app/mocks/users.mock';
import useUserStore from '../hooks/useUserStore';

const FILTER_FIELDS: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search...', width: 200 },
  {
    name: 'status',
    type: 'select',
    placeholder: 'Status',
    width: 120,
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
    ],
  },
];

export default function UserList() {
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const { data, total, loading, fetchList, remove } = useUserStore();
  const [modalOpen, setModalOpen] = useState(false);
  const canEdit = useHasPermission(PERMISSIONS.USERS_EDIT);
  const canDelete = useHasPermission(PERMISSIONS.USERS_DELETE);
  const [editingId, setEditingId] = useState<string | null>(null);

  const canCreate = useHasPermission(PERMISSIONS.USERS_CREATE);
  const canView = useHasPermission(PERMISSIONS.USERS_VIEW);
  const hasAnyUserAction = useHasAnyPermission(
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.USERS_VIEW
  );

  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 10;
  const q = searchParams.get('q') || '';
  const status = searchParams.get('status') || '';

  const load = useCallback(() => {
    fetchList({ page, per_page, q, status });
  }, [fetchList, page, per_page, q, status]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) {
      message.success('User deleted');
      load();
    } else {
      message.error('Failed to delete');
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingId(null);
  const hasAnyUserAction = canEdit || canDelete || canView;

    load();
  };

  const columns: ColumnsType<MockUser> = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (s: string) => <StatusTag status={s} />,
    },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
    ...(hasAnyUserAction
      ? [
          {
            title: 'Actions',
            key: 'actions',
            render: (_: unknown, record: MockUser) => (
              <ActionButtons
                editPermission={PERMISSIONS.USERS_EDIT}
                deletePermission={PERMISSIONS.USERS_DELETE}
                viewPermission={PERMISSIONS.USERS_VIEW}
                viewTo={`/users/${record.id}`}
                onEdit={() => handleEdit(record.id)}
                onDelete={() => handleDelete(record.id)}
              />
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="animate-fade-in">
      <FilterBar
        fields={FILTER_FIELDS}
        actions={
          <>
            {canCreate && (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditingId(null);
                  setModalOpen(true);
                }}
              >
                Add User
              </Button>
            )}
            {canView && (
              <Button
                icon={<DownloadOutlined />}
                onClick={() =>
                  exportToExcel(data, `users-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Users')
                }
              >
                Export Excel
              </Button>
            )}
          </>
        }
      />

      <DataTable<MockUser>
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
