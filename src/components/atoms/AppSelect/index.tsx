import clsx from 'clsx';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

function AppSelectInner<ValueType = unknown>({ className, allowClear = true, ...rest }: SelectProps<ValueType>) {
  return (
    <Select
      allowClear={allowClear}
      className={clsx(DEFAULT_CLASS, className)}
      {...rest}
    />
  );
}

export default AppSelectInner;
