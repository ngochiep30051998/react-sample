import { getPermissionsForRoles } from '@configs/rbac.config';
import useAuthStore from '@app/store/useAuthStore';
import { IMenuItem } from '@app/interfaces/common.interface';

function userHasPermission(permission: string | undefined): boolean {
  if (!permission) return true;
  const { roles, permissions } = useAuthStore.getState();
  if (permissions?.includes(permission)) return true;
  if (roles.length) {
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