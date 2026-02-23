import clsx from 'clsx';
import { Outlet } from 'react-router';
import { App, ConfigProvider, Drawer, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import useAuthStore from '@app/store/useAuthStore';
import useThemeStore from '@app/store/useThemeStore';
import { useMediaQuery } from '@app/hooks/useMediaQuery';
import { MenuItems } from '@app/routing';
import { filterMenuByPermission } from '@app/utils/menu.utils';
import AppHeader from '@organisms/AppHeader';
import AppSidebar from '@organisms/AppSidebar';
import AppBreadcrumb from '@organisms/AppBreadcrumb';

export default function AdminTemplate() {
  const { themeMode, mobileDrawerOpen, setMobileDrawerOpen } = useThemeStore();
  const isMobile = !useMediaQuery('(min-width: 992px)');
  const isDark = themeMode === 'dark';

  useAuthStore((s) => s.permissions);
  const filteredMenuItems = filterMenuByPermission(MenuItems);

  const themeConfig: ThemeConfig = {
    token: {
      colorPrimary: '#667eea',
      borderRadius: 8,
      colorBgContainer: isDark ? '#1a1a1a' : '#ffffff',
    },
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Button: { fontSizeIcon: 24, controlHeight: 32 },
      Card: { borderRadiusLG: 12 },
      Table: { borderRadius: 12 },
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <App>
        <div
          className={clsx(
            'flex flex-col min-h-screen',
            isDark
              ? 'bg-[#0a0a0a]'
              : 'bg-gradient-to-br from-gray-50 to-gray-100'
          )}
        >
          <AppHeader />
          <div className="flex flex-1 overflow-hidden">
            {isMobile ? (
              <Drawer
                title={<span className="font-semibold text-white">Navigation</span>}
                placement="left"
                open={mobileDrawerOpen}
                onClose={() => setMobileDrawerOpen(false)}
                styles={{
                  body: { padding: 0 },
                  header: {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderBottom: 'none',
                  },
                }}
                width={280}
              >
                <AppSidebar
                  menuItems={filteredMenuItems}
                  onItemClick={() => setMobileDrawerOpen(false)}
                  forceExpanded
                />
              </Drawer>
            ) : (
              <aside
                className={clsx(
                  'shrink-0 transition-all duration-300',
                  isDark
                    ? 'bg-[#141414] shadow-[2px_0_16px_rgba(0,0,0,0.3)]'
                    : 'bg-white shadow-sidebar'
                )}
              >
                <AppSidebar menuItems={filteredMenuItems} />
              </aside>
            )}
            <main
              className={clsx(
                'flex-1 overflow-auto p-4 md:p-8',
                isDark
                  ? 'bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100'
              )}
            >
              <AppBreadcrumb />
              <Outlet />
            </main>
          </div>
        </div>
      </App>
    </ConfigProvider>
  );
}
