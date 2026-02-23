import clsx from 'clsx';
import { Table } from 'antd';
import type { TableProps } from 'antd';

const DEFAULT_CLASS = '!rounded-xl';

export default function AppTable<T extends object>({ className, ...rest }: TableProps<T>) {
  return <Table<T> className={clsx(DEFAULT_CLASS, className)} {...rest} />;
}
