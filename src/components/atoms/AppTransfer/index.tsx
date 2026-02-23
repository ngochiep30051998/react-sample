import { Transfer } from 'antd';
import type { TransferProps } from 'antd';

export default function AppTransfer<RecordType extends { key?: string; disabled?: boolean } = { key: string }>(
  props: TransferProps<RecordType>
) {
  return <Transfer {...props} />;
}
