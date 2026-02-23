import clsx from 'clsx';
import { ReactNode, useCallback } from 'react';
import { useSearchParams } from 'react-router';
import type { ColumnsType, TableProps } from 'antd/es/table';
import AppTable from '@atoms/AppTable';

export interface DataTableProps<T extends object> {
  /** Column definitions */
  columns: ColumnsType<T>;
  /** Data source */
  dataSource: T[];
  /** Unique key field name, default "id" */
  rowKey?: string | ((record: T) => string);
  /** Loading state */
  loading?: boolean;
  /** Total records for pagination */
  total?: number;
  /** Default page size, default 10 */
  defaultPageSize?: number;
  /** Available page sizes, default [10, 20, 50] */
  pageSizeOptions?: number[];
  /** Text for total display, receives total count */
  showTotal?: (total: number) => ReactNode;
  /** Hide pagination entirely */
  hidePagination?: boolean;
  /** Extra Ant Table props */
  tableProps?: Omit<TableProps<T>, 'columns' | 'dataSource' | 'rowKey' | 'loading' | 'pagination'>;
  /** Container className */
  className?: string;
}

export default function DataTable<T extends object>({
  columns,
  dataSource,
  rowKey = 'id',
  loading = false,
  total,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50],
  showTotal,
  hidePagination = false,
  tableProps,
  className,
}: DataTableProps<T>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('per_page')) || defaultPageSize;
  const totalRecords = total ?? dataSource.length;

  const handlePageChange = useCallback(
    (newPage: number, newPageSize: number) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('page', String(newPage));
        next.set('per_page', String(newPageSize));
        return next;
      });
    },
    [setSearchParams]
  );

  return (
    <div
      className={clsx(
        'data-table-primary-header',
        'bg-white rounded-2xl p-5 shadow-card',
        'border border-primary-100/30',
        '[&_.ant-table-thead_th]:!bg-primary',
        '[&_.ant-table-thead_th]:!text-white',
        '[&_.ant-table-thead_th]:!font-semibold',
        '[&_.ant-table-thead_th]:!border-0',
        className
      )}
    >
      <AppTable<T>
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        loading={loading}
        pagination={
          hidePagination
            ? false
            : {
                current: page,
                pageSize,
                total: totalRecords,
                showSizeChanger: true,
                pageSizeOptions: pageSizeOptions.map(String),
                showTotal: showTotal ?? ((t) => `Total ${t} records`),
                onChange: handlePageChange,
              }
        }
        scroll={{ x: 'max-content' }}
        {...tableProps}
      />
    </div>
  );
}
