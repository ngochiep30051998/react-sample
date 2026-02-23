import { FileTextOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { PERMISSIONS } from '@configs/rbac.config';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PermissionGuard } from '../../guards/PermissionGuard';

const OrderList = loadable(() => import('./pages/OrderList'));
const OrderDetail = loadable(() => import('./pages/OrderDetail'));

export const Router: RouteObject = {
  path: 'orders',
  children: [
    {
      index: true,
      element: (
        <PermissionGuard permission={PERMISSIONS.ORDERS_VIEW}>
          <OrderList />
        </PermissionGuard>
      ),
    },
    {
      path: ':id',
      element: (
        <PermissionGuard permission={PERMISSIONS.ORDERS_VIEW}>
          <OrderDetail />
        </PermissionGuard>
      ),
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Orders', 'orders', <FileTextOutlined />, '/orders', undefined, undefined, undefined, PERMISSIONS.ORDERS_VIEW),
];
