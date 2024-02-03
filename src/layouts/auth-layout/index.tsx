import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Components


const AuthLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export { AuthLayout };