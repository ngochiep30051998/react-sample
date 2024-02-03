import { RouteObject } from 'react-router';
import loadable from '../../components/Loadable';
import { IMenuItem } from '../../interfaces/common.interface';
const Home = loadable(() => import('./pages/Home'));

export const Router: RouteObject = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />
    },
  ],
}

export const MenuItems: IMenuItem[] = [
  // getItem('Trang chủ', RouterUrl.Home, <HomeFilled />, RouterUrl.Home, undefined, <Home />)
]