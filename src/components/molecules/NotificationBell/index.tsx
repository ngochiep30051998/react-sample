import { Button, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

interface NotificationBellProps {
  count?: number;
  onClick?: () => void;
}

export default function NotificationBell({ count = 0, onClick }: NotificationBellProps) {
  return (
    <Badge count={count} size="small">
      <Button
        type="text"
        className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
        icon={<BellOutlined />}
        onClick={onClick}
      />
    </Badge>
  );
}
