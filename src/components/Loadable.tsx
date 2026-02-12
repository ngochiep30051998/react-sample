import { lazy, Suspense, ComponentType } from 'react';
import { Loading } from './loading/Loading';

export default function loadable<T extends ComponentType<any>>(
  loader: () => Promise<{ default: T }>
) {
  const LazyComponent = lazy(loader);
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}