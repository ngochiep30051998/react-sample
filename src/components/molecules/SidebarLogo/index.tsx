import { AppstoreOutlined } from '@ant-design/icons';
import GradientAvatar from '@atoms/GradientAvatar';
import useThemeStore from '@app/store/useThemeStore';
import clsx from 'clsx';

interface SidebarLogoProps {
  expanded: boolean;
}

export default function SidebarLogo({ expanded }: SidebarLogoProps) {
  const { themeMode } = useThemeStore();
  const isDark = themeMode === 'dark';

  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-5 py-6 border-b transition-all',
        isDark ? 'border-white/5' : 'border-primary/10',
        !expanded && 'justify-center'
      )}
    >
      <GradientAvatar icon={<AppstoreOutlined />} size={40} />
      {expanded && (
        <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
          Admin
        </span>
      )}
    </div>
  );
}
