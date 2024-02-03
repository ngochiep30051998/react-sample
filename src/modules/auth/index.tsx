import { RouteObject } from 'react-router';
import loadable from '../../components/Loadable';

const Login = loadable(() => import('./pages/login/Login'));
const ForgotPassword = loadable(() => import('./pages/forgot-password/ForgotPassword'));

export const Router: RouteObject = {
  path: '',
  children: [
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'forgotPassword',
      element: <ForgotPassword />
    }
  ]
}

