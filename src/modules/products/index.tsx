import { ShoppingOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@app/components/utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const ProductList = loadable(() => import('./pages/ProductList'));

export const Router: RouteObject = {
  path: 'products',
  children: [{ index: true, element: <ProductList /> }],
};

export const MenuItems: IMenuItem[] = [
  getItem('Products', 'products', <ShoppingOutlined />, '/products', undefined, undefined, undefined, 'products:view'),
];
