import clsx from 'clsx';
import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import useAuthStore from '@app/store/useAuthStore';
import useThemeStore from '@app/store/useThemeStore';
import { useMediaQuery } from '@app/hooks/useMediaQuery';
import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import AppButton from '@atoms/AppButton';
import { useNavigate } from 'react-router';
import UserDropdown from '@molecules/UserDropdown';
import ThemeToggleBtn from '@molecules/ThemeToggleBtn';
import NotificationBell from '@molecules/NotificationBell';

export default function AppHeader() {
  const navigate = useNavigate();
  const { menuDesktopOpen, toggleMenuDesktopOpen, setMobileDrawerOpen, themeMode, toggleTheme } = useThemeStore();
  const isMobile = !useMediaQuery('(min-width: 992px)');
  const isDark = themeMode === 'dark';

  const cached = cache.getCache(LOCAL_USER_KEY)?.data;
  const username = cached?.username ?? 'User';
  const clearRolesAndPermissions = useAuthStore((s) => s.clearRolesAndPermissions);

  const handleLogout = () => {
    cache.remove(LOCAL_USER_KEY);
    clearRolesAndPermissions();
    navigate('/login');
  };

  const userMenuItems: MenuProps['items'] = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile', onClick: () => {} },
    { type: 'divider' },
    { key: 'logout', label: 'Logout', danger: true, onClick: handleLogout },
  ];

  return (
    <div
      className={clsx(
        'sticky top-0 z-50 flex items-center justify-between',
        'h-16 px-6 shadow-md',
        isDark
          ? 'bg-gradient-to-r from-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-primary to-accent'
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-2 cursor-pointer text-white text-xl font-bold hover:scale-105 transition-transform"
          onClick={() => navigate('/')}
        >
          <DashboardOutlined className="text-2xl" />
          <span className="hidden md:inline">Admin Panel</span>
        </div>
        <AppButton
          type="text"
          className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
          icon={isMobile ? <MenuUnfoldOutlined /> : menuDesktopOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          onClick={() => (isMobile ? setMobileDrawerOpen(true) : toggleMenuDesktopOpen())}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <ThemeToggleBtn isDark={isDark} onToggle={toggleTheme} />
        <NotificationBell count={5} />
        <UserDropdown username={username} menuItems={userMenuItems} />
      </div>
    </div>
  );
}
