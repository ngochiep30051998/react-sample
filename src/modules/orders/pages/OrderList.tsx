import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { App, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined } from '@ant-design/icons';
import FilterBar, { type FilterField } from '@app/components/organisms/FilterBar';
import DataTable from '@app/components/organisms/DataTable';
import OrderStatusModal from '@app/components/organisms/OrderStatusModal';
import StatusTag from '@app/components/atoms/StatusTag';
import ActionButtons from '@app/components/molecules/ActionButtons';
import { exportToExcel } from '@app/utils/export.utils';
import type { MockOrder } from '@app/mocks/orders.mock';
import useOrderStore from '../hooks/useOrderStore';

const FILTER_FIELDS: FilterField[] = [
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

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async (id: string) => {
    if (await remove(id)) {
      message.success('Order deleted');
      load();
    } else {
      message.error('Failed to delete');
    }
  };

  const columns: ColumnsType<MockOrder> = [
    {
      title: 'Order No',
      dataIndex: 'orderNo',
      key: 'orderNo',
      render: (v: string) => <span className="font-medium text-primary">{v}</span>,
    },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Items', dataIndex: 'items', key: 'items', align: 'center' },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (v: number) => `$${v.toLocaleString()}`,
    },
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
      render: (_, record) => (
        <ActionButtons
          onEdit={() => {
            setSelectedOrder(record);
            setStatusModalOpen(true);
          }}
          onDelete={() => handleDelete(record.id)}
          editLabel="Update Status"
        />
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <FilterBar
        fields={FILTER_FIELDS}
        actions={
          <Button
            icon={<DownloadOutlined />}
            onClick={() =>
              exportToExcel(data, `orders-${new Date().toISOString().slice(0, 10)}.xlsx`, 'Orders')
            }
          >
            Export
          </Button>
        }
      />

      <DataTable<MockOrder>
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
        total={total}
        showTotal={(t) => `Total ${t} orders`}
      />

      <OrderStatusModal
        open={statusModalOpen}
        order={selectedOrder}
        onClose={() => {
          setStatusModalOpen(false);
          setSelectedOrder(null);
          load();
        }}
      />
    </div>
  );
}
