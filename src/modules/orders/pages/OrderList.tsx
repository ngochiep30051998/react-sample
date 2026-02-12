import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined } from '@ant-design/icons';
import BaseFilter, { type FilterField } from '@app/components/BaseFilter';
import BaseTable from '@app/components/BaseTable';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockOrder } from '@app/mocks/orders.mock';
import useOrderStore from '../hooks/useOrderStore';
import OrderStatusModal from './OrderStatusModal';

const STATUS_COLOR: Record<string, string> = {
  pending: 'orange',
  processing: 'blue',
  shipped: 'cyan',
  delivered: 'green',
  cancelled: 'red',
};

const FILTER_FIELDS: FilterField[] = [
  { name: 'q', type: 'input', placeholder: 'Search orders...', width: 200 },
  {
    name: 'status', type: 'select', placeholder: 'Status', width: 140,
    options: [
      { value: 'pending', label: 'Pending' },
      { value: 'processing', label: 'Processing' },
      { value: 'shipped', label: 'Shipped' },
      { value: 'delivered', label: 'Delivered' },
      { value: 'cancelled', label: 'Cancelled' },
    ],
  },
];

export default function OrderList() {
  const { message } = App.useApp();
  const [searchParams] = useSearchParams();
  const { data, total, loading, fetchList, remove } = useOrderStore();
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<MockOrder | null>(null);

  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 10;
  const q = searchParams.get('q') || '';
  const status = searchParams.get('status') || '';

  const load = useCallback(() => {
    fetchList({ page, per_page, q, status });
  }, [fetchList, page, per_page, q, status]);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) { message.success('Order deleted'); load(); }
    else message.error('Failed to delete');
  };

  const columns: ColumnsType<MockOrder> = [
    { title: 'Order No', dataIndex: 'orderNo', key: 'orderNo', render: (v: string) => <span className="font-medium text-primary">{v}</span> },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Items', dataIndex: 'items', key: 'items', align: 'center' },
    { title: 'Total', dataIndex: 'total', key: 'total', render: (v: number) => `$${v.toLocaleString()}` },
    {
      title: 'Status', dataIndex: 'status', key: 'status',
      render: (s: string) => <Tag color={STATUS_COLOR[s] ?? 'default'}>{s.charAt(0).toUpperCase() + s.slice(1)}</Tag>,
    },
    { title: 'Created', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Actions', key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" size="small" onClick={() => { setSelectedOrder(record); setStatusModalOpen(true); }}>Update Status</Button>
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
          <Button icon={<DownloadOutlined />} onClick={() => exportToExcel(data, `orders-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Orders')}>Export</Button>
        }
      />

      <BaseTable<MockOrder> columns={columns} dataSource={data} rowKey="id" loading={loading} total={total} showTotal={(t) => `Total ${t} orders`} />
      <OrderStatusModal open={statusModalOpen} order={selectedOrder} onClose={() => { setStatusModalOpen(false); setSelectedOrder(null); load(); }} />
    </div>
  );
}
