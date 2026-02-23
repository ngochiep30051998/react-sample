import { UserOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { PERMISSIONS } from '@configs/rbac.config';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PermissionGuard } from '../../guards/PermissionGuard';

const UserList = loadable(() => import('./pages/UserList'));
const UserDetail = loadable(() => import('./pages/UserDetail'));

export const Router: RouteObject = {
  path: 'users',
  children: [
    {
      index: true,
      element: (
        <PermissionGuard permission={PERMISSIONS.USERS_VIEW}>
          <UserList />
        </PermissionGuard>
      ),
    },
    {
      path: ':id',
      element: (
        <PermissionGuard permission={PERMISSIONS.USERS_VIEW}>
          <UserDetail />
        </PermissionGuard>
      ),
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Users', 'users', <UserOutlined />, '/users', undefined, undefined, undefined, PERMISSIONS.USERS_VIEW),
];
