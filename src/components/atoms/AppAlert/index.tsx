import { Alert } from 'antd';
import type { AlertProps } from 'antd';

const DEFAULT_CLASS = 'rounded-xl';

export default function AppAlert({ className, ...rest }: AlertProps) {
  return <Alert className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
