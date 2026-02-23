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

const NO_PERMISSION = '__no_permission__';

/** Returns true if the user has at least one of the given permissions. */
export function useHasAnyPermission(
  editPermission?: string,
  deletePermission?: string,
  viewPermission?: string
): boolean {
  const hasEdit = useHasPermission(editPermission ?? NO_PERMISSION);
  const hasDelete = useHasPermission(deletePermission ?? NO_PERMISSION);
  const hasView = useHasPermission(viewPermission ?? NO_PERMISSION);
  return hasEdit || hasDelete || hasView;
}
