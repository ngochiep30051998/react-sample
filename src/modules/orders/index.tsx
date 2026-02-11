import { FileTextOutlined } from '@ant-design/icons';
import { RouteObject } from 'react-router';
import loadable from '../../components/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
import { getItem } from '../../routing/menu';

const OrderList = loadable(() => import('./pages/OrderList'));

export const Router: RouteObject = {
  path: 'orders',
  children: [{ index: true, element: <OrderList /> }],
};

export const MenuItems: IMenuItem[] = [
  getItem('Orders', 'orders', <FileTextOutlined />, '/orders', undefined, undefined, undefined, 'orders:view'),
];
