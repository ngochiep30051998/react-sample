import cache from '@app/core/cache';
import { LOCAL_USER_KEY } from '@app/configs/auth.config';
import { getPermissionsForRoles } from '@app/configs/rbac.config';
import { IMenuItem } from '@app/interfaces/common.interface';

function userHasPermission(permission: string | undefined): boolean {
  if (!permission) return true;
  const userData = cache.getCache(LOCAL_USER_KEY)?.data;
  const permissions = userData?.permissions as string[] | undefined;
  const roles = userData?.roles as string[] | undefined;
  if (permissions?.includes(permission)) return true;
  if (roles) {
    const rolePerms = getPermissionsForRoles(roles);
    return rolePerms.includes(permission);
  }
  return false;
}

export function filterMenuByPermission(items: IMenuItem[]): IMenuItem[] {
  const result: IMenuItem[] = [];
  for (const item of items) {
    const filteredChildren = item.children?.length
      ? filterMenuByPermission(item.children)
      : undefined;
    const hasVisibleChildren = filteredChildren && filteredChildren.length > 0;
    const hasPermission = userHasPermission(item.permission);
    if (!hasPermission && !hasVisibleChildren) continue;
    result.push({ ...item, children: filteredChildren });
  }
  return result;
}