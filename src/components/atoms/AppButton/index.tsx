import clsx from 'clsx';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppButton({ className, ...rest }: ButtonProps) {
  return <Button className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
