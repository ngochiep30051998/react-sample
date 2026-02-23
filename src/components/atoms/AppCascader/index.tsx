import clsx from 'clsx';
import { Cascader } from 'antd';
import type { CascaderProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppCascader<OptionType = unknown>({
  className,
  ...rest
}: CascaderProps<OptionType>) {
  return <Cascader className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
