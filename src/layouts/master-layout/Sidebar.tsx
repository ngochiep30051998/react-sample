import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useLocation } from 'react-router';
import { AppstoreOutlined } from '@ant-design/icons';
import { IMenuItem } from '@app/interfaces/common.interface';
import useThemeStore from '@app/store/useThemeStore';

interface SidebarProps {
  menuItems: IMenuItem[];
  onItemClick?: () => void;
  forceExpanded?: boolean;
}

function renderMenuItems(items: IMenuItem[], onItemClick?: () => void): NonNullable<MenuProps['items']> {
  return items.map((item) => renderMenuItemWithClick(item, onItemClick)).filter(Boolean);
}

function renderMenuItemWithClick(item: IMenuItem, onItemClick?: () => void): NonNullable<MenuProps['items']>[0] {
  if (!item) return null;
  if (item.children?.length) {
    return {
      key: item.key,
      icon: item.icon,
      label: item.label,
      children: item.children.map((c) => renderMenuItemWithClick(c, onItemClick)).filter(Boolean) as NonNullable<MenuProps['items']>,
    };
  }
  return { key: item.key, icon: item.icon, label: item.label, onClick: onItemClick || item.onClick };
}

export default function Sidebar({ menuItems, onItemClick, forceExpanded }: SidebarProps) {
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
      {/* Logo */}
      <div className={`flex items-center gap-3 px-5 py-6 border-b transition-all ${isDark ? 'border-white/5' : 'border-primary/10'} ${!expanded ? 'justify-center' : ''}`}>
        <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-white text-xl shrink-0 shadow-md bg-gradient-to-br from-primary to-accent">
          <AppstoreOutlined />
        </div>
        {expanded && (
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
            Admin
          </span>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2">
        <Menu
          mode="inline"
          selectedKeys={selectedKey ? [String(selectedKey)] : []}
          items={items}
          inlineCollapsed={!expanded}
          className={`!border-r-0 !bg-transparent sidebar-menu ${isDark ? 'sidebar-menu--dark' : ''}`}
        />
      </div>
    </div>
  );
}
