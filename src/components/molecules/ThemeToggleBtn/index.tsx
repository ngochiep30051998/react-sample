import { Button } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

interface ThemeToggleBtnProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggleBtn({ isDark, onToggle }: ThemeToggleBtnProps) {
  return (
    <Button
      type="text"
      className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
      icon={isDark ? <BulbFilled /> : <BulbOutlined />}
      onClick={onToggle}
    />
  );
}
