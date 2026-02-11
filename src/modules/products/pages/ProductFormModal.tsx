import { useEffect } from 'react';
import { App, Form, Input, InputNumber, Modal, Select } from 'antd';
import type { MockProduct } from '@app/mocks/products.mock';
import useProductStore from '../hooks/useProductStore';

interface Props {
  open: boolean;
  editingId: string | null;
  onClose: () => void;
}

export default function ProductFormModal({ open, editingId, onClose }: Props) {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const { detailLoading, saving, fetchById, create, update, resetDetail } = useProductStore();

  useEffect(() => {
    if (open && editingId) {
      fetchById(editingId).then((p) => { if (p) form.setFieldsValue(p); });
    } else if (open) {
      form.resetFields();
      resetDetail();
    }
  }, [open, editingId, form, fetchById, resetDetail]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingId) {
        await update(editingId, values);
        message.success('Product updated');
      } else {
        await create(values as Omit<MockProduct, 'id' | 'createdAt'>);
        message.success('Product created');
      }
      onClose();
    } catch { /* validation */ }
  };

  return (
    <Modal title={editingId ? 'Edit Product' : 'Create Product'} open={open} onOk={handleSubmit} onCancel={onClose} confirmLoading={saving} destroyOnHidden>
      <Form form={form} layout="vertical" disabled={detailLoading}>
        <Form.Item name="name" label="Product Name" rules={[{ required: true }]}><Input /></Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select options={['Laptops', 'Phones', 'Tablets', 'Accessories', 'Wearables'].map((c) => ({ value: c, label: c }))} />
        </Form.Item>
        <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}><InputNumber min={0} className="!w-full" /></Form.Item>
        <Form.Item name="stock" label="Stock" rules={[{ required: true }]}><InputNumber min={0} className="!w-full" /></Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select options={[{ value: 'in_stock', label: 'In Stock' }, { value: 'out_of_stock', label: 'Out of Stock' }]} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
