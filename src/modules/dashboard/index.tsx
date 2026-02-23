import { DashboardOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@app/components/utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const Dashboard = loadable(() => import('./pages/Dashboard'));

export const Router: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Dashboard', 'dashboard', <DashboardOutlined />, '/', undefined, undefined, undefined, 'dashboard:view'),
];
