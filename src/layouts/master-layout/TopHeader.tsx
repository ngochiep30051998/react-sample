import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import useThemeStore from '@app/store/useThemeStore';
import { useMediaQuery } from '@app/hooks/useMediaQuery';
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router';

export default function TopHeader() {
  const navigate = useNavigate();
  const { menuDesktopOpen, toggleMenuDesktopOpen, setMobileDrawerOpen, themeMode, toggleTheme } = useThemeStore();
  const isMobile = !useMediaQuery('(min-width: 992px)');
  const isDark = themeMode === 'dark';

  const userData = cache.getCache(LOCAL_USER_KEY)?.data;
  const username = userData?.username ?? 'User';

  const handleLogout = () => {
    cache.remove(LOCAL_USER_KEY);
    navigate('/login');
  };

  const userMenuItems: MenuProps['items'] = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile', onClick: () => {} },
    { type: 'divider' },
    { key: 'logout', label: 'Logout', danger: true, onClick: handleLogout },
  ];

  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between h-16 px-6 shadow-md ${
        isDark
          ? 'bg-gradient-to-r from-gray-800 to-gray-900'
          : 'bg-gradient-to-r from-primary to-accent'
      }`}
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
        <Button
          type="text"
          className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
          icon={isMobile ? <MenuUnfoldOutlined /> : menuDesktopOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          onClick={() => (isMobile ? setMobileDrawerOpen(true) : toggleMenuDesktopOpen())}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <Button
          type="text"
          className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
          icon={isDark ? <BulbFilled /> : <BulbOutlined />}
          onClick={toggleTheme}
        />
        <Badge count={5} size="small">
          <Button
            type="text"
            className="!text-white !text-lg !rounded-lg hover:!bg-white/15 transition-all"
            icon={<BellOutlined />}
          />
        </Badge>
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 cursor-pointer hover:bg-white/20 transition-all">
            <Avatar size="small" icon={<UserOutlined />} className="!bg-white !text-primary" />
            <span className="text-white font-medium text-sm hidden sm:inline">{username}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
