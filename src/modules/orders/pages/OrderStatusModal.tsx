import { useState } from 'react';
import { App, Modal, Select } from 'antd';
import type { MockOrder } from '@app/mocks/orders.mock';
import useOrderStore from '../hooks/useOrderStore';

const STATUS_OPTIONS: { value: MockOrder['status']; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'processing', label: 'Processing' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
];

interface Props {
  open: boolean;
  order: MockOrder | null;
  onClose: () => void;
}

export default function OrderStatusModal({ open, order, onClose }: Props) {
  const { message } = App.useApp();
  const { saving, updateStatus } = useOrderStore();
  const [status, setStatus] = useState<MockOrder['status'] | undefined>();

  const handleSubmit = async () => {
    if (!order || !status) return;
    const updated = await updateStatus(order.id, status);
    if (updated) { message.success(`Order ${order.orderNo} updated to ${status}`); onClose(); }
    else message.error('Failed to update');
  };

  return (
    <Modal title={`Update Status — ${order?.orderNo ?? ''}`} open={open} onOk={handleSubmit} onCancel={onClose} confirmLoading={saving} destroyOnHidden>
      <div className="py-4">
        <p className="mb-2 text-sm text-slate-500">Current status: <strong>{order?.status}</strong></p>
        <Select
          className="!w-full"
          placeholder="Select new status"
          value={status}
          onChange={setStatus}
          options={STATUS_OPTIONS}
        />
      </div>
    </Modal>
  );
}
