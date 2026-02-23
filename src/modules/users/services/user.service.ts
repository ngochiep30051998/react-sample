import { sleep } from '@core/sleep';
import { MOCK_USERS, type MockUser } from '@app/mocks/users.mock';

export interface UserListParams {
  page?: number;
  per_page?: number;
  q?: string;
  status?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
}

export async function fetchUsers(params: UserListParams = {}): Promise<PaginatedResponse<MockUser>> {
  await sleep(500);

  const { page = 1, per_page = 10, q = '', status } = params;
  let filtered = [...MOCK_USERS];

  if (q) {
    const lower = q.toLowerCase();
    filtered = filtered.filter(
      (u) =>
        u.username.toLowerCase().includes(lower) ||
        u.email.toLowerCase().includes(lower) ||
        u.fullName.toLowerCase().includes(lower)
    );
  }

  if (status) {
    filtered = filtered.filter((u) => u.status === status);
  }

  const total = filtered.length;
  const start = (page - 1) * per_page;
  const data = filtered.slice(start, start + per_page);

  return { data, total, page, per_page };
}

export async function fetchUserById(id: string): Promise<MockUser | null> {
  await sleep(300);
  return MOCK_USERS.find((u) => u.id === id) ?? null;
}

export async function createUser(payload: Omit<MockUser, 'id' | 'createdAt'>): Promise<MockUser> {
  await sleep(500);
  const newUser: MockUser = {
    ...payload,
    id: String(Date.now()),
    createdAt: new Date().toISOString().split('T')[0],
  };
  MOCK_USERS.push(newUser);
  return newUser;
}

export async function updateUser(id: string, payload: Partial<MockUser>): Promise<MockUser | null> {
  await sleep(500);
  const idx = MOCK_USERS.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  MOCK_USERS[idx] = { ...MOCK_USERS[idx], ...payload };
  return MOCK_USERS[idx];
}

export async function deleteUser(id: string): Promise<boolean> {
  await sleep(500);
  const idx = MOCK_USERS.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  MOCK_USERS.splice(idx, 1);
  return true;
}
