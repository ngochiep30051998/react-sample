import clsx from 'clsx';
import { Input } from 'antd';
import type { InputProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

function AppInput({ className, allowClear = true, ...rest }: InputProps) {
  return (
    <Input
      allowClear={allowClear}
      className={clsx(DEFAULT_CLASS, className)}
      {...rest}
    />
  );
}

AppInput.Password = Input.Password;
export default AppInput;
