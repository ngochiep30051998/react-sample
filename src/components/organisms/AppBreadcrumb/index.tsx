import clsx from 'clsx';
import { Link, useLocation } from 'react-router';
import AppBreadcrumbList from '@atoms/AppBreadcrumb';
import { getBreadcrumbItems } from '@configs/breadcrumb.config';
import useThemeStore from '@app/store/useThemeStore';

export default function AppBreadcrumb() {
  const location = useLocation();
  const { themeMode } = useThemeStore();
  const isDark = themeMode === 'dark';
  const items = getBreadcrumbItems(location.pathname);

  const breadcrumbItems = items.map((item) => ({
    title: item.path ? <Link to={item.path}>{item.title}</Link> : item.title,
  }));

  if (breadcrumbItems.length === 0) return null;

  return (
    <div
      className={clsx(
        'mb-6 px-4 py-3 rounded-xl shadow-sm backdrop-blur-sm',
        isDark ? 'bg-white/5' : 'bg-white/60'
      )}
    >
      <AppBreadcrumbList items={breadcrumbItems} />
    </div>
  );
}
