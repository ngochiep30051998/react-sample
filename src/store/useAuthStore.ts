import { create } from 'zustand';
import cache from '@core/cache';
import { LOCAL_USER_KEY } from '@configs/auth.config';
import { getPermissionsForRoles } from '@configs/rbac.config';
import { getRolesForUsername } from '@app/modules/auth/services/auth.service';

interface AuthState {
  roles: string[];
  permissions: string[];
  setRolesAndPermissions: (roles: string[], permissions: string[]) => void;
  clearRolesAndPermissions: () => void;
  /** Restore roles/permissions from cache (username) after refresh */
  hydrateFromCache: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  roles: [],
  permissions: [],

  setRolesAndPermissions: (roles, permissions) => set({ roles, permissions }),

  clearRolesAndPermissions: () => set({ roles: [], permissions: [] }),

  hydrateFromCache: () => {
    const cached = cache.getCache(LOCAL_USER_KEY)?.data;
    const username = cached?.username;
    if (!username) return;
    const roles = getRolesForUsername(username);
    const permissions = getPermissionsForRoles(roles);
    set({ roles, permissions });
  },
}));

export default useAuthStore;
