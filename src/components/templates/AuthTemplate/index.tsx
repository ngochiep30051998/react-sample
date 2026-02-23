import { Outlet } from 'react-router';

export default function AuthTemplate() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}
