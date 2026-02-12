import { create } from 'zustand';
import type { MockUser } from '@app/mocks/users.mock';
import * as userService from '../services/user.service';
import type { UserListParams } from '../services/user.service';

/* ------------------------------------------------------------------ */
/*  State & Actions                                                    */
/* ------------------------------------------------------------------ */

interface UserState {
  /** List data */
  data: MockUser[];
  total: number;
  loading: boolean;

  /** Detail / form */
  detail: MockUser | null;
  detailLoading: boolean;
  saving: boolean;

  /** Actions */
  fetchList: (params?: UserListParams) => Promise<void>;
  fetchById: (id: string) => Promise<MockUser | null>;
  create: (payload: Omit<MockUser, 'id' | 'createdAt'>) => Promise<MockUser>;
  update: (id: string, payload: Partial<MockUser>) => Promise<MockUser | null>;
  remove: (id: string) => Promise<boolean>;
  resetDetail: () => void;
}

/* ------------------------------------------------------------------ */
/*  Store                                                              */
/* ------------------------------------------------------------------ */

const useUserStore = create<UserState>()((set) => ({
  data: [],
  total: 0,
  loading: false,

  detail: null,
  detailLoading: false,
  saving: false,

  fetchList: async (params) => {
    set({ loading: true });
    try {
      const res = await userService.fetchUsers(params);
      set({ data: res.data, total: res.total });
    } finally {
      set({ loading: false });
    }
  },

  fetchById: async (id) => {
    set({ detailLoading: true });
    try {
      const user = await userService.fetchUserById(id);
      set({ detail: user });
      return user;
    } finally {
      set({ detailLoading: false });
    }
  },

  create: async (payload) => {
    set({ saving: true });
    try {
      const user = await userService.createUser(payload);
      return user;
    } finally {
      set({ saving: false });
    }
  },

  update: async (id, payload) => {
    set({ saving: true });
    try {
      const user = await userService.updateUser(id, payload);
      return user;
    } finally {
      set({ saving: false });
    }
  },

  remove: async (id) => {
    const ok = await userService.deleteUser(id);
    return ok;
  },

  resetDetail: () => set({ detail: null }),
}));

export default useUserStore;
