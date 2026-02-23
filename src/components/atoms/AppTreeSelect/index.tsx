import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppTreeSelect<ValueType = unknown>({
  className,
  ...rest
}: TreeSelectProps<ValueType>) {
  return <TreeSelect className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
