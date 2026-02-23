import { Link } from 'react-router';
import { Button, Space } from 'antd';
import { useHasPermission } from '@app/hooks/useHasPermission';

interface ActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  editLabel?: string;
  deleteLabel?: string;
  /** Permission for Edit. If provided, Edit is shown only when user has this permission. */
  editPermission?: string;
  /** Permission for Delete. If provided, Delete is shown only when user has this permission. */
  deletePermission?: string;
  /** Permission for View link. If provided with viewTo, View link is shown only when user has this permission. */
  viewPermission?: string;
  /** Path for View link (e.g. `/users/123`). Used with viewPermission. */
  viewTo?: string;
  /** @deprecated Use editPermission instead. Kept for backward compatibility. */
  showEdit?: boolean;
  /** @deprecated Use deletePermission instead. Kept for backward compatibility. */
  showDelete?: boolean;
  /** Extra actions (e.g. custom links). Rendered after View when no viewTo is used. */
  extraActions?: React.ReactNode;
}

const NO_PERM = '__no_perm__';

export default function ActionButtons({
  onEdit,
  onDelete,
  editLabel = 'Edit',
  deleteLabel = 'Delete',
  editPermission,
  deletePermission,
  viewPermission,
  viewTo,
  showEdit = true,
  showDelete = true,
  extraActions,
}: ActionButtonsProps) {
  const hasEditPerm = useHasPermission(editPermission ?? NO_PERM);
  const hasDeletePerm = useHasPermission(deletePermission ?? NO_PERM);
  const hasViewPerm = useHasPermission(viewPermission ?? NO_PERM);

  const canEdit = editPermission !== undefined ? hasEditPerm : showEdit;
  const canDelete = deletePermission !== undefined ? hasDeletePerm : showDelete;
  const canView = viewPermission !== undefined && viewTo !== undefined && hasViewPerm;

  return (
    <Space>
      {canEdit && onEdit && (
        <Button type="link" size="small" onClick={onEdit}>
          {editLabel}
        </Button>
      )}
      {canDelete && onDelete && (
        <Button type="link" size="small" danger onClick={onDelete}>
          {deleteLabel}
        </Button>
      )}
      {canView && viewTo && <Link to={viewTo}>View</Link>}
      {extraActions}
    </Space>
  );
}
