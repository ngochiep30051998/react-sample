import { Table } from 'antd';
import type { TableProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppTable<T extends object>({ className, ...rest }: TableProps<T>) {
  return <Table<T> className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
