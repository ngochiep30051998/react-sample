import { Progress } from 'antd';
import type { ProgressProps } from 'antd';

export default function AppProgress({ strokeColor, ...rest }: ProgressProps) {
  return <Progress strokeColor={strokeColor ?? '#667eea'} {...rest} />;
}
