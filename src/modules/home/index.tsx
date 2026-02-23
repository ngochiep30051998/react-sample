import { DashboardOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const Home = loadable(() => import('./pages/Home'));

export const Router: RouteObject = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Dashboard', 'dashboard', <DashboardOutlined />, '/'),
];