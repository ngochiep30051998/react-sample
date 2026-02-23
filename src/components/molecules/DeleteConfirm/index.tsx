import { Button } from 'antd';
import AppPopconfirm from '@atoms/AppPopconfirm';

interface DeleteConfirmProps {
  onConfirm: () => void | Promise<void>;
  title?: string;
  okText?: string;
  cancelText?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function DeleteConfirm({
  onConfirm,
  title = 'Are you sure you want to delete?',
  okText = 'Delete',
  cancelText = 'Cancel',
  children,
  disabled,
}: DeleteConfirmProps) {
  return (
    <AppPopconfirm
      title={title}
      onConfirm={onConfirm}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ danger: true }}
    >
      {children ?? (
        <Button type="link" size="small" danger disabled={disabled}>
          Delete
        </Button>
      )}
    </AppPopconfirm>
  );
}
