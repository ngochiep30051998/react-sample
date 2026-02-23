import { Cascader } from 'antd';
import type { CascaderProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppCascader<OptionType = unknown>({
  className,
  ...rest
}: CascaderProps<OptionType>) {
  return <Cascader className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
