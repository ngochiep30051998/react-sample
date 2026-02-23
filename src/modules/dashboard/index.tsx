import { DashboardOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { PERMISSIONS } from '@configs/rbac.config';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PermissionGuard } from '../../guards/PermissionGuard';

const Dashboard = loadable(() => import('./pages/Dashboard'));

export const Router: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: (
        <PermissionGuard permission={PERMISSIONS.DASHBOARD_VIEW}>
          <Dashboard />
        </PermissionGuard>
      ),
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Dashboard', 'dashboard', <DashboardOutlined />, '/', undefined, undefined, undefined, PERMISSIONS.DASHBOARD_VIEW),
];
