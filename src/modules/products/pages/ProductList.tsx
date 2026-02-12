import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import BaseFilter, { type FilterField } from '@app/components/BaseFilter';
import BaseTable from '@app/components/BaseTable';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockProduct } from '@app/mocks/products.mock';
import useProductStore from '../hooks/useProductStore';
import ProductFormModal from './ProductFormModal';

const FILTER_FIELDS: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search products...', width: 200 },
  {
    name: 'category', type: 'select', placeholder: 'Category', width: 140,
    options: ['Laptops', 'Phones', 'Tablets', 'Accessories', 'Wearables'].map((c) => ({ value: c, label: c })),
  },
];

export default function ProductList() {
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const { data, total, loading, fetchList, remove } = useProductStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 10;
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const load = useCallback(() => {
    fetchList({ page, per_page, q, category });
  }, [fetchList, page, per_page, q, category]);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) { message.success('Product deleted'); load(); }
    else message.error('Failed to delete');
  };

  const columns: ColumnsType<MockProduct> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category', render: (c: string) => <Tag>{c}</Tag> },
    { title: 'Price', dataIndex: 'price', key: 'price', render: (p: number) => `$${p.toLocaleString()}` },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
    {
      title: 'Status', dataIndex: 'status', key: 'status',
      render: (s: string) => <Tag color={s === 'in_stock' ? 'green' : 'volcano'}>{s === 'in_stock' ? 'In Stock' : 'Out of Stock'}</Tag>,
    },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Actions', key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" size="small" onClick={() => { setEditingId(record.id); setModalOpen(true); }}>Edit</Button>
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
            <Button type="primary" icon={<PlusOutlined />} onClick={() => { setEditingId(null); setModalOpen(true); }}>Add Product</Button>
            <Button icon={<DownloadOutlined />} onClick={() => exportToExcel(data, `products-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Products')}>Export</Button>
          </>
        }
      />

      <BaseTable<MockProduct> columns={columns} dataSource={data} rowKey="id" loading={loading} total={total} showTotal={(t) => `Total ${t} products`} />
      <ProductFormModal open={modalOpen} editingId={editingId} onClose={() => { setModalOpen(false); setEditingId(null); load(); }} />
    </div>
  );
}
