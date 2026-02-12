import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export { AuthLayout };
