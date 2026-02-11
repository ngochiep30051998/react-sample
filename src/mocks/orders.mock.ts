export interface MockOrder {
  id: string;
  orderNo: string;
  customer: string;
  email: string;
  total: number;
  items: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export const MOCK_ORDERS: MockOrder[] = [
  { id: '1', orderNo: 'ORD-2024001', customer: 'John Doe', email: 'john@example.com', total: 3698, items: 2, status: 'delivered', createdAt: '2024-01-18' },
  { id: '2', orderNo: 'ORD-2024002', customer: 'Jane Smith', email: 'jane@example.com', total: 1199, items: 1, status: 'shipped', createdAt: '2024-02-22' },
  { id: '3', orderNo: 'ORD-2024003', customer: 'Bob Wilson', email: 'bob@example.com', total: 249, items: 1, status: 'cancelled', createdAt: '2024-03-05' },
  { id: '4', orderNo: 'ORD-2024004', customer: 'Alice Brown', email: 'alice@example.com', total: 2548, items: 3, status: 'processing', createdAt: '2024-03-28' },
  { id: '5', orderNo: 'ORD-2024005', customer: 'Charlie Davis', email: 'charlie@example.com', total: 799, items: 1, status: 'pending', createdAt: '2024-04-10' },
  { id: '6', orderNo: 'ORD-2024006', customer: 'Diana Lee', email: 'diana@example.com', total: 1598, items: 2, status: 'shipped', createdAt: '2024-04-25' },
  { id: '7', orderNo: 'ORD-2024007', customer: 'Edward Kim', email: 'edward@example.com', total: 349, items: 1, status: 'delivered', createdAt: '2024-05-03' },
  { id: '8', orderNo: 'ORD-2024008', customer: 'Fiona Green', email: 'fiona@example.com', total: 4497, items: 3, status: 'pending', createdAt: '2024-05-15' },
];
