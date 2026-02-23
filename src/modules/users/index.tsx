import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PERMISSIONS } from '@configs/rbac.config';

const UserList = loadable(() => import('./pages/UserList'));
const UserDetail = loadable(() => import('./pages/UserDetail'));

export const Router: RouteObject = {
  path: 'users',
  children: [
    { index: true, element: <UserList /> },
    { path: ':id', element: <UserDetail /> },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Users', 'users', <UserOutlined />, '/users', undefined, undefined, undefined, PERMISSIONS.USERS_VIEW),
];
