import clsx from 'clsx';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppTreeSelect<ValueType = unknown>({
  className,
  ...rest
}: TreeSelectProps<ValueType>) {
  return <TreeSelect className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
