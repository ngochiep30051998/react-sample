import clsx from 'clsx';
import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppInputNumber({ className, ...rest }: InputNumberProps) {
  return <InputNumber className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
