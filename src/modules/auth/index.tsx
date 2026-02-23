import { RouteObject } from 'react-router';
import loadable from '@utils/Loadable';

const Login = loadable(() => import('./pages/login/Login'));
const ForgotPassword = loadable(() => import('./pages/forgot-password/ForgotPassword'));
const Register = loadable(() => import('./pages/register/Register'));

export const Router: RouteObject = {
  path: '',
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'forgotPassword',
      element: <ForgotPassword />,
    },
    {
      path: 'register',
      element: <Register />,
    },
  ],
};
