import { Button, Space } from 'antd';

interface ActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  editLabel?: string;
  deleteLabel?: string;
  showEdit?: boolean;
  showDelete?: boolean;
  extraActions?: React.ReactNode;
}

export default function ActionButtons({
  onEdit,
  onDelete,
  editLabel = 'Edit',
  deleteLabel = 'Delete',
  showEdit = true,
  showDelete = true,
  extraActions,
}: ActionButtonsProps) {
  return (
    <Space>
      {showEdit && onEdit && (
        <Button type="link" size="small" onClick={onEdit}>
          {editLabel}
        </Button>
      )}
      {showDelete && onDelete && (
        <Button type="link" size="small" danger onClick={onDelete}>
          {deleteLabel}
        </Button>
      )}
      {extraActions}
    </Space>
  );
}
