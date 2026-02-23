import { useEffect } from 'react';
import { App, Form } from 'antd';
import AppInput from '@atoms/AppInput';
import AppModal from '@atoms/AppModal';
import AppSelect from '@atoms/AppSelect';
import type { MockUser } from '@app/mocks/users.mock';
import useUserStore from '@app/modules/users/hooks/useUserStore';

interface UserFormModalProps {
  open: boolean;
  editingId: string | null;
  onClose: () => void;
}

export default function UserFormModal({ open, editingId, onClose }: UserFormModalProps) {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const { detailLoading, saving, fetchById, create, update, resetDetail } = useUserStore();

  useEffect(() => {
    if (open && editingId) {
      fetchById(editingId).then((user) => {
        if (user) form.setFieldsValue(user);
      });
    } else if (open && !editingId) {
      form.resetFields();
      resetDetail();
    }
  }, [open, editingId, form, fetchById, resetDetail]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editingId) {
        await update(editingId, values);
        message.success('User updated');
      } else {
        await create(values as Omit<MockUser, 'id' | 'createdAt'>);
        message.success('User created');
      }
      onClose();
    } catch {
      // form validation or api error
    }
  };

  return (
    <AppModal
      title={editingId ? 'Edit User' : 'Create User'}
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      confirmLoading={saving}
      destroyOnClose
    >
      <Form form={form} layout="vertical" disabled={detailLoading}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <AppInput />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }, { type: 'email' }]}>
          <AppInput />
        </Form.Item>
        <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
          <AppInput />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <AppSelect
            options={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        </Form.Item>
      </Form>
    </AppModal>
  );
}
