import React, { Fragment, ReactElement, ReactNode, useLayoutEffect } from 'react';
import { Navigate } from 'react-router';
import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import useAuthStore from '@app/store/useAuthStore';

type Props = {
  children: ReactNode | ReactElement;
};

const PrivateGuard: React.FC<Props> = ({ children }) => {
  const cached = cache.getCache(LOCAL_USER_KEY)?.data;
  const hasToken = !!(cached?.token);
  const roles = useAuthStore((s) => s.roles);
  const hydrateFromCache = useAuthStore((s) => s.hydrateFromCache);

  useLayoutEffect(() => {
    if (hasToken && roles.length === 0) hydrateFromCache();
  }, [hasToken, roles.length, hydrateFromCache]);

  return (
    <Fragment>
      {hasToken ? <Fragment>{children}</Fragment> : <Navigate to="/login" />}
    </Fragment>
  );
};

export { PrivateGuard }