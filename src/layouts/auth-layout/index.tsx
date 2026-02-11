import { Outlet } from 'react-router-dom';
import './AuthLayout.scss';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export { AuthLayout };