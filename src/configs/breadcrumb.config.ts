export const BREADCRUMB_MAP: Record<string, string> = {
  '/': 'Dashboard',
  '/users': 'User Management',
  '/users/create': 'Create User',
  '/users/:id': 'User detail',
  '/products': 'Product Management',
  '/products/:id': 'Product detail',
  '/orders': 'Order Management',
  '/orders/:id': 'Order detail',
};

export function getBreadcrumbItems(pathname: string): { title: string; path?: string }[] {
  const segments = pathname.split('/').filter(Boolean);
  const items: { title: string; path?: string }[] = [];
  let currentPath = '';

  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const exactMatch = BREADCRUMB_MAP[currentPath];
    const paramMatch = Object.keys(BREADCRUMB_MAP).find((key) => {
      const pattern = key.replace(/:[^/]+/g, '[^/]+');
      return new RegExp(`^${pattern}$`).test(currentPath);
    });
    const label = exactMatch ?? (paramMatch ? BREADCRUMB_MAP[paramMatch] : segments[i]) ?? currentPath;
    items.push({
      title: label,
      path: i < segments.length - 1 ? currentPath : undefined,
    });
  }

  if (items.length === 0 && pathname === '/') {
    items.push({ title: 'Dashboard', path: undefined });
  }

  return items;
}
