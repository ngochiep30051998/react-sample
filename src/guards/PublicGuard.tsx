import React, { Fragment, ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router';
import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';

type Props = {
  children: ReactNode | ReactElement;
};

const PublicGuard: React.FC<Props> = ({ children }) => {
  const hasToken = !!cache.getCache(LOCAL_USER_KEY)?.data?.token;

  return (
    <Fragment>
      {hasToken ? <Navigate to="/home" /> : <Fragment>{children}</Fragment>}
    </Fragment>
  );
};

export { PublicGuard }