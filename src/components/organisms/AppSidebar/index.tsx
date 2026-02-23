import clsx from 'clsx';
import type { MenuProps } from 'antd';
import AppMenu from '@atoms/AppMenu';
import { useLocation } from 'react-router';
import { IMenuItem } from '@app/interfaces/common.interface';
import useThemeStore from '@app/store/useThemeStore';
import SidebarLogo from '@molecules/SidebarLogo';

interface AppSidebarProps {
  menuItems: IMenuItem[];
  onItemClick?: () => void;
  forceExpanded?: boolean;
}

function renderMenuItems(items: IMenuItem[], onItemClick?: () => void): NonNullable<MenuProps['items']> {
  return items.map((item) => renderMenuItemWithClick(item, onItemClick)).filter(Boolean);
}

function renderMenuItemWithClick(
  item: IMenuItem,
  onItemClick?: () => void
): NonNullable<MenuProps['items']>[0] {
  if (!item) return null;
  if (item.children?.length) {
    return {
      key: item.key,
      icon: item.icon,
      label: item.label,
      children: item.children
        .map((c) => renderMenuItemWithClick(c, onItemClick))
        .filter(Boolean) as NonNullable<MenuProps['items']>,
    };
  }
  return { key: item.key, icon: item.icon, label: item.label, onClick: onItemClick || item.onClick };
}

export default function AppSidebar({ menuItems, onItemClick, forceExpanded }: AppSidebarProps) {
  const { menuDesktopOpen, themeMode } = useThemeStore();
  const expanded = forceExpanded ?? menuDesktopOpen;
  const isDark = themeMode === 'dark';
  const location = useLocation();

  const selectedKey = menuItems
    .flatMap((item) => (item.children ? [item, ...item.children] : [item]))
    .find((item) => item.to && location.pathname === item.to)?.key;

  const items: MenuProps['items'] = renderMenuItems(menuItems, onItemClick);

  return (
    <div
      className="h-full flex flex-col overflow-hidden transition-all duration-300"
      style={{ width: expanded ? 256 : 80 }}
    >
      <SidebarLogo expanded={expanded} />

      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        <AppMenu
          mode="inline"
          selectedKeys={selectedKey ? [String(selectedKey)] : []}
          items={items}
          inlineCollapsed={!expanded}
          className={clsx(
          '!border-r-0 !bg-transparent sidebar-menu',
          isDark && 'sidebar-menu--dark'
        )}
        />
      </div>
    </div>
  );
}
