import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '../../components/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PERMISSIONS } from '@app/configs/rbac.config';

const UserList = loadable(() => import('./pages/UserList'));

export const Router: RouteObject = {
  path: 'users',
  children: [
    {
      index: true,
      element: <UserList />,
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Users', 'users', <UserOutlined />, '/users', undefined, undefined, undefined, PERMISSIONS.USERS_VIEW),
];
