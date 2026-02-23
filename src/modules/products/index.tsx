import { ShoppingOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { PERMISSIONS } from '@configs/rbac.config';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';
import { PermissionGuard } from '../../guards/PermissionGuard';

const ProductList = loadable(() => import('./pages/ProductList'));
const ProductDetail = loadable(() => import('./pages/ProductDetail'));

export const Router: RouteObject = {
  path: 'products',
  children: [
    {
      index: true,
      element: (
        <PermissionGuard permission={PERMISSIONS.PRODUCTS_VIEW}>
          <ProductList />
        </PermissionGuard>
      ),
    },
    {
      path: ':id',
      element: (
        <PermissionGuard permission={PERMISSIONS.PRODUCTS_VIEW}>
          <ProductDetail />
        </PermissionGuard>
      ),
    },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Products', 'products', <ShoppingOutlined />, '/products', undefined, undefined, undefined, PERMISSIONS.PRODUCTS_VIEW),
];
