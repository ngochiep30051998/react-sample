import { useState } from 'react';
import { App } from 'antd';
import AppModal from '@atoms/AppModal';
import AppSelect from '@atoms/AppSelect';
import type { MockOrder } from '@app/mocks/orders.mock';
import useOrderStore from '@app/modules/orders/hooks/useOrderStore';

const STATUS_OPTIONS: { value: MockOrder['status']; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'processing', label: 'Processing' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
];

interface OrderStatusModalProps {
  open: boolean;
  order: MockOrder | null;
  onClose: () => void;
}

export default function OrderStatusModal({ open, order, onClose }: OrderStatusModalProps) {
  const { message } = App.useApp();
  const { saving, updateStatus } = useOrderStore();
  const [status, setStatus] = useState<MockOrder['status'] | undefined>();

  const handleSubmit = async () => {
    if (!order || !status) return;
    const updated = await updateStatus(order.id, status);
    if (updated) {
      message.success(`Order ${order.orderNo} updated to ${status}`);
      onClose();
    } else {
      message.error('Failed to update');
    }
  };

  return (
    <AppModal
      title={`Update Status — ${order?.orderNo ?? ''}`}
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      confirmLoading={saving}
      destroyOnClose
    >
      <div className="py-4">
        <p className="mb-2 text-sm text-slate-500">
          Current status: <strong>{order?.status}</strong>
        </p>
        <AppSelect
          className="!w-full !rounded-xl"
          placeholder="Select new status"
          value={status}
          onChange={setStatus}
          options={STATUS_OPTIONS}
        />
      </div>
    </AppModal>
  );
}
