import { create } from 'zustand';
import type { MockProduct } from '@app/mocks/products.mock';
import * as productService from '../services/product.service';
import type { ProductListParams } from '../services/product.service';

/* ------------------------------------------------------------------ */
/*  State & Actions                                                    */
/* ------------------------------------------------------------------ */

interface ProductState {
  /** List data */
  data: MockProduct[];
  total: number;
  loading: boolean;

  /** Detail / form */
  detail: MockProduct | null;
  detailLoading: boolean;
  saving: boolean;

  /** Actions */
  fetchList: (params?: ProductListParams) => Promise<void>;
  fetchById: (id: string) => Promise<MockProduct | null>;
  create: (payload: Omit<MockProduct, 'id' | 'createdAt'>) => Promise<MockProduct>;
  update: (id: string, payload: Partial<MockProduct>) => Promise<MockProduct | null>;
  remove: (id: string) => Promise<boolean>;
  resetDetail: () => void;
}

/* ------------------------------------------------------------------ */
/*  Store                                                              */
/* ------------------------------------------------------------------ */

const useProductStore = create<ProductState>()((set) => ({
  data: [],
  total: 0,
  loading: false,

  detail: null,
  detailLoading: false,
  saving: false,

  fetchList: async (params) => {
    set({ loading: true });
    try {
      const res = await productService.fetchProducts(params);
      set({ data: res.data, total: res.total });
    } finally {
      set({ loading: false });
    }
  },

  fetchById: async (id) => {
    set({ detailLoading: true });
    try {
      const product = await productService.fetchProductById(id);
      set({ detail: product });
      return product;
    } finally {
      set({ detailLoading: false });
    }
  },

  create: async (payload) => {
    set({ saving: true });
    try {
      const product = await productService.createProduct(payload);
      return product;
    } finally {
      set({ saving: false });
    }
  },

  update: async (id, payload) => {
    set({ saving: true });
    try {
      const product = await productService.updateProduct(id, payload);
      return product;
    } finally {
      set({ saving: false });
    }
  },

  remove: async (id) => {
    const ok = await productService.deleteProduct(id);
    return ok;
  },

  resetDetail: () => set({ detail: null }),
}));

export default useProductStore;
