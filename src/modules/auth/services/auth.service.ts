import { sleep } from '@core/sleep';
import { ROLES } from '@configs/rbac.config';

/** Map username to roles (sync, used by mock API and hydrate). */
export function getRolesForUsername(username: string): string[] {
  const normalized = username?.trim().toLowerCase() ?? '';
  if (normalized === 'admin') return [ROLES.ADMIN];
  if (normalized === 'manager') return [ROLES.MANAGER];
  return [ROLES.USER];
}

/**
 * Mock API: get roles for the current user from backend.
 * Simulates network delay and returns roles based on username.
 */
export async function getRolesFromBackend(username: string): Promise<string[]> {
  await sleep(600);
  return getRolesForUsername(username);
}
