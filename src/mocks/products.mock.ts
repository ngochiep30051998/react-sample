export interface MockProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'in_stock' | 'out_of_stock';
  createdAt: string;
}

export const MOCK_PRODUCTS: MockProduct[] = [
  { id: '1', name: 'MacBook Pro 16"', category: 'Laptops', price: 2499, stock: 24, status: 'in_stock', createdAt: '2024-01-10' },
  { id: '2', name: 'iPhone 15 Pro Max', category: 'Phones', price: 1199, stock: 58, status: 'in_stock', createdAt: '2024-02-05' },
  { id: '3', name: 'AirPods Pro 2', category: 'Accessories', price: 249, stock: 0, status: 'out_of_stock', createdAt: '2024-02-18' },
  { id: '4', name: 'iPad Air M2', category: 'Tablets', price: 799, stock: 33, status: 'in_stock', createdAt: '2024-03-12' },
  { id: '5', name: 'Apple Watch Ultra', category: 'Wearables', price: 799, stock: 12, status: 'in_stock', createdAt: '2024-04-01' },
  { id: '6', name: 'Samsung Galaxy S24', category: 'Phones', price: 899, stock: 0, status: 'out_of_stock', createdAt: '2024-04-20' },
  { id: '7', name: 'Sony WH-1000XM5', category: 'Accessories', price: 349, stock: 45, status: 'in_stock', createdAt: '2024-05-08' },
];
