import { Empty } from 'antd';
import type { EmptyProps } from 'antd';

const DEFAULT_DESCRIPTION = 'Chưa có dữ liệu';

export default function AppEmpty({ description = DEFAULT_DESCRIPTION, ...rest }: EmptyProps) {
  return <Empty description={description} {...rest} />;
}
