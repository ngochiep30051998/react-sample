export interface MockUser {
  id: string;
  username: string;
  email: string;
  fullName: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export const MOCK_USERS: MockUser[] = [
  { id: '1', username: 'john_doe', email: 'john@example.com', fullName: 'John Doe', status: 'active', createdAt: '2024-01-15' },
  { id: '2', username: 'jane_smith', email: 'jane@example.com', fullName: 'Jane Smith', status: 'active', createdAt: '2024-02-20' },
  { id: '3', username: 'bob_wilson', email: 'bob@example.com', fullName: 'Bob Wilson', status: 'inactive', createdAt: '2024-03-10' },
  { id: '4', username: 'alice_brown', email: 'alice@example.com', fullName: 'Alice Brown', status: 'active', createdAt: '2024-04-05' },
  { id: '5', username: 'charlie_davis', email: 'charlie@example.com', fullName: 'Charlie Davis', status: 'inactive', createdAt: '2024-05-12' },
];
