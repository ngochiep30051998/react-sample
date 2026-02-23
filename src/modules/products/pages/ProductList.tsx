import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { PERMISSIONS } from '@configs/rbac.config';
import { useHasPermission, useHasAnyPermission } from '@app/hooks/useHasPermission';
import FilterBar, { type FilterField } from '@organisms/FilterBar';
import DataTable from '@organisms/DataTable';
import ProductFormModal from '@organisms/ProductFormModal';
import StatusTag from '@atoms/StatusTag';
import ActionButtons from '@molecules/ActionButtons';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockProduct } from '@app/mocks/products.mock';
import useProductStore from '../hooks/useProductStore';

const FILTER_FIELDS: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search products...', width: 200 },
  {
    name: 'category',
    type: 'select',
    placeholder: 'Category',
    width: 140,
    options: ['Laptops', 'Phones', 'Tablets', 'Accessories', 'Wearables'].map((c) => ({
      value: c,
      label: c,
    })),
  },
];

export default function ProductList() {
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const { data, total, loading, fetchList, remove } = useProductStore();
  const [modalOpen, setModalOpen] = useState(false);
  const canEdit = useHasPermission(PERMISSIONS.PRODUCTS_EDIT);
  const canDelete = useHasPermission(PERMISSIONS.PRODUCTS_DELETE);
  const [editingId, setEditingId] = useState<string | null>(null);

  const canCreate = useHasPermission(PERMISSIONS.PRODUCTS_CREATE);
  const canView = useHasPermission(PERMISSIONS.PRODUCTS_VIEW);
  const hasAnyProductAction = useHasAnyPermission(
    PERMISSIONS.PRODUCTS_EDIT,
    PERMISSIONS.PRODUCTS_DELETE,
    PERMISSIONS.PRODUCTS_VIEW
  );

  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 10;
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const load = useCallback(() => {
    fetchList({ page, per_page, q, category });
  }, [fetchList, page, per_page, q, category]);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) {
      message.success('Product deleted');
      load();
    } else {
      message.error('Failed to delete');
  const hasAnyProductAction = canEdit || canDelete || canView;

    }
  };

  const columns: ColumnsType<MockProduct> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (c: string) => <Tag>{c}</Tag>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (p: number) => `$${p.toLocaleString()}`,
    },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (s: string) => <StatusTag status={s} />,
    },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
    ...(hasAnyProductAction
      ? [
          {
            title: 'Actions',
            key: 'actions',
            render: (_: unknown, record: MockProduct) => (
              <ActionButtons
                editPermission={PERMISSIONS.PRODUCTS_EDIT}
                deletePermission={PERMISSIONS.PRODUCTS_DELETE}
                viewPermission={PERMISSIONS.PRODUCTS_VIEW}
                viewTo={`/products/${record.id}`}
                onEdit={() => { setEditingId(record.id); setModalOpen(true); }}
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
                Add Product
              </Button>
            )}
            {canView && (
              <Button
                icon={<DownloadOutlined />}
                onClick={() =>
                  exportToExcel(
                    data,
                    `products-${new Date().toISOString().slice(0, 10)}.xlsx`,
                    'Products'
                  )
                }
              >
                Export
              </Button>
            )}
          </>
        }
      />

      <DataTable<MockProduct>
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
        total={total}
        showTotal={(t) => `Total ${t} products`}
      />

      <ProductFormModal
        open={modalOpen}
        editingId={editingId}
        onClose={() => {
          setModalOpen(false);
          setEditingId(null);
          load();
        }}
      />
    </div>
  );
}
