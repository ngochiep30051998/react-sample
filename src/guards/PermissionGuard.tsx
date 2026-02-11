import { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useHasPermission } from '@app/hooks/useHasPermission';

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function PermissionGuard({ permission, children, fallback }: PermissionGuardProps) {
  const hasPermission = useHasPermission(permission);

  if (hasPermission) return <>{children}</>;
  if (fallback) return <>{fallback}</>;
  return <Navigate to="/" replace />;
}
