import clsx from 'clsx';
import { Segmented } from 'antd';
import type { SegmentedProps } from 'antd';

const DEFAULT_CLASS = 'rounded-xl';

export default function AppSegmented<ValueType = string>({
  className,
  ...rest
}: SegmentedProps<ValueType>) {
  return <Segmented className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
