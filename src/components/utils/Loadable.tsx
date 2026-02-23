import { lazy, Suspense, ComponentType } from 'react';
import Spinner from '@atoms/Spinner';

export default function loadable<T extends ComponentType<any>>(
  loader: () => Promise<{ default: T }>
) {
  const LazyComponent = lazy(loader);
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<Spinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
