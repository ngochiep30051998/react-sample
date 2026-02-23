import { ShoppingOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const ProductList = loadable(() => import('./pages/ProductList'));
const ProductDetail = loadable(() => import('./pages/ProductDetail'));

export const Router: RouteObject = {
  path: 'products',
  children: [
    { index: true, element: <ProductList /> },
    { path: ':id', element: <ProductDetail /> },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Products', 'products', <ShoppingOutlined />, '/products', undefined, undefined, undefined, 'products:view'),
];
