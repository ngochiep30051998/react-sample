import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import { getPermissionsForRoles } from '@configs/rbac.config';

export function useHasPermission(permission: string): boolean {
  const userData = cache.getCache(LOCAL_USER_KEY)?.data;
  const permissions = userData?.permissions as string[] | undefined;
  const roles = userData?.roles as string[] | undefined;

  if (!permission) return true;
  if (permissions?.includes(permission)) return true;
  if (roles) {
    const rolePerms = getPermissionsForRoles(roles);
    return rolePerms.includes(permission);
  }
  return false;
}
