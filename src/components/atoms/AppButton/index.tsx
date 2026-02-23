import { Button } from 'antd';
import type { ButtonProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppButton({ className, ...rest }: ButtonProps) {
  return <Button className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
