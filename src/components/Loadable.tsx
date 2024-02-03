import reactLoadable, {Options} from '@loadable/component';
import { Loading } from './loading/Loading';

export type LoadableOptions<T> = Options<T>;

export default function loadable<T>(loader: () => Promise<any>, options?: LoadableOptions<T>) {
  return reactLoadable(loader, {
    ...options,
    fallback: (
      <Loading />
    )
  });
}