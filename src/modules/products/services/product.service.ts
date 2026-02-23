import { sleep } from '@core/sleep';
import { MOCK_PRODUCTS, type MockProduct } from '@app/mocks/products.mock';

export interface ProductListParams {
  page?: number;
  per_page?: number;
  q?: string;
  category?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

export async function fetchProducts(params: ProductListParams = {}): Promise<PaginatedResponse<MockProduct>> {
  await sleep(400);
  const { page = 1, per_page = 10, q = '', category } = params;
  let filtered = [...MOCK_PRODUCTS];
  if (q) {
    const lower = q.toLowerCase();
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower));
  }
  if (category) filtered = filtered.filter((p) => p.category === category);
  const total = filtered.length;
  const data = filtered.slice((page - 1) * per_page, page * per_page);
  return { data, total };
}

export async function fetchProductById(id: string): Promise<MockProduct | null> {
  await sleep(200);
  return MOCK_PRODUCTS.find((p) => p.id === id) ?? null;
}

export async function createProduct(payload: Omit<MockProduct, 'id' | 'createdAt'>): Promise<MockProduct> {
  await sleep(400);
  const item: MockProduct = { ...payload, id: String(Date.now()), createdAt: new Date().toISOString().split('T')[0] };
  MOCK_PRODUCTS.push(item);
  return item;
}

export async function updateProduct(id: string, payload: Partial<MockProduct>): Promise<MockProduct | null> {
  await sleep(400);
  const idx = MOCK_PRODUCTS.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  MOCK_PRODUCTS[idx] = { ...MOCK_PRODUCTS[idx], ...payload };
  return MOCK_PRODUCTS[idx];
}

export async function deleteProduct(id: string): Promise<boolean> {
  await sleep(400);
  const idx = MOCK_PRODUCTS.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  MOCK_PRODUCTS.splice(idx, 1);
  return true;
}
