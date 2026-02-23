import { create } from 'zustand';
import type { MockOrder } from '@app/mocks/orders.mock';
import * as orderService from '../services/order.service';
import type { OrderListParams } from '../services/order.service';

/* ------------------------------------------------------------------ */
/*  State & Actions                                                    */
/* ------------------------------------------------------------------ */

interface OrderState {
  /** List data */
  data: MockOrder[];
  total: number;
  loading: boolean;

  /** Detail */
  detail: MockOrder | null;
  detailLoading: boolean;

  /** Status update */
  saving: boolean;

  /** Actions */
  fetchList: (params?: OrderListParams) => Promise<void>;
  fetchById: (id: string) => Promise<MockOrder | null>;
  updateStatus: (id: string, status: MockOrder['status']) => Promise<MockOrder | null>;
  remove: (id: string) => Promise<boolean>;
  resetDetail: () => void;
}

/* ------------------------------------------------------------------ */
/*  Store                                                              */
/* ------------------------------------------------------------------ */

const useOrderStore = create<OrderState>()((set) => ({
  data: [],
  total: 0,
  loading: false,
  detail: null,
  detailLoading: false,
  saving: false,

  fetchList: async (params) => {
    set({ loading: true });
    try {
      const res = await orderService.fetchOrders(params);
      set({ data: res.data, total: res.total });
    } finally {
      set({ loading: false });
    }
  },

  fetchById: async (id) => {
    set({ detailLoading: true });
    try {
      const order = await orderService.fetchOrderById(id);
      set({ detail: order });
      return order;
    } finally {
      set({ detailLoading: false });
    }
  },

  updateStatus: async (id, status) => {
    set({ saving: true });
    try {
      const order = await orderService.updateOrderStatus(id, status);
      return order;
    } finally {
      set({ saving: false });
    }
  },

  remove: async (id) => {
    const ok = await orderService.deleteOrder(id);
    return ok;
  },

  resetDetail: () => set({ detail: null }),
}));

export default useOrderStore;
