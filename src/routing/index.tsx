import { RouterProvider, createBrowserRouter } from 'react-router';
import { Suspense } from 'react';
import { RouteErrorBoundary } from '@organisms/RouteErrorBoundary';
import AdminTemplate from '@templates/AdminTemplate';
import AuthTemplate from '@templates/AuthTemplate';
import Spinner from '@atoms/Spinner';
import * as Dashboard from '../modules/dashboard';
import * as Users from '../modules/users';
import * as Products from '../modules/products';
import * as Orders from '../modules/orders';
import * as Auth from '../modules/auth';
// Guards
import { PublicGuard } from '../guards/PublicGuard';
import { PrivateGuard } from '../guards/PrivateGuard';
import { IMenuItem } from '../interfaces/common.interface';

const modules = [Dashboard, Users, Products, Orders];

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <RouteErrorBoundary />,
      HydrateFallback: Spinner,
      children: [
        {
          path: '/',
          element: <PrivateGuard children={<AdminTemplate />} />,
          children: [],
        },
        {
          element: <PublicGuard children={<AuthTemplate />} />,
          children: [Auth.Router],
        },
        {
          element: <PrivateGuard children={<AdminTemplate />} />,
          children: [...modules.map((x) => x.Router)],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.PUBLIC_URL,
  }
);

const Router = () => (
  <Suspense fallback={<Spinner />}>
    <RouterProvider router={router} />
  </Suspense>
);

export const MenuItems: IMenuItem[] = [
  ...modules.map((x) => x.MenuItems).reduce((prev, curr) => prev.concat(curr), []),
];

export default Router;
