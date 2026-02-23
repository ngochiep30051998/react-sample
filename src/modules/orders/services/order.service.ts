import { sleep } from '@core/sleep';
import { MOCK_ORDERS, type MockOrder } from '@app/mocks/orders.mock';

export interface OrderListParams {
  page?: number;
  per_page?: number;
  q?: string;
  status?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

export async function fetchOrders(params: OrderListParams = {}): Promise<PaginatedResponse<MockOrder>> {
  await sleep(400);
  const { page = 1, per_page = 10, q = '', status } = params;
  let filtered = [...MOCK_ORDERS];
  if (q) {
    const lower = q.toLowerCase();
    filtered = filtered.filter((o) => o.orderNo.toLowerCase().includes(lower) || o.customer.toLowerCase().includes(lower) || o.email.toLowerCase().includes(lower));
  }
  if (status) filtered = filtered.filter((o) => o.status === status);
  const total = filtered.length;
  const data = filtered.slice((page - 1) * per_page, page * per_page);
  return { data, total };
}

export async function fetchOrderById(id: string): Promise<MockOrder | null> {
  await sleep(200);
  return MOCK_ORDERS.find((o) => o.id === id) ?? null;
}

export async function updateOrderStatus(id: string, status: MockOrder['status']): Promise<MockOrder | null> {
  await sleep(400);
  const idx = MOCK_ORDERS.findIndex((o) => o.id === id);
  if (idx === -1) return null;
  MOCK_ORDERS[idx] = { ...MOCK_ORDERS[idx], status };
  return MOCK_ORDERS[idx];
}

export async function deleteOrder(id: string): Promise<boolean> {
  await sleep(400);
  const idx = MOCK_ORDERS.findIndex((o) => o.id === id);
  if (idx === -1) return false;
  MOCK_ORDERS.splice(idx, 1);
  return true;
}
