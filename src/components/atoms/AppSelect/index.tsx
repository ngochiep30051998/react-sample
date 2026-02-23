import { Select } from 'antd';
import type { SelectProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

function AppSelectInner<ValueType = unknown>({ className, allowClear = true, ...rest }: SelectProps<ValueType>) {
  return (
    <Select
      allowClear={allowClear}
      className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()}
      {...rest}
    />
  );
}

export default AppSelectInner;
