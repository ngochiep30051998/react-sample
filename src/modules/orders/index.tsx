import { FileTextOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const OrderList = loadable(() => import('./pages/OrderList'));
const OrderDetail = loadable(() => import('./pages/OrderDetail'));

export const Router: RouteObject = {
  path: 'orders',
  children: [
    { index: true, element: <OrderList /> },
    { path: ':id', element: <OrderDetail /> },
  ],
};

export const MenuItems: IMenuItem[] = [
  getItem('Orders', 'orders', <FileTextOutlined />, '/orders', undefined, undefined, undefined, 'orders:view'),
];
