import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

export default function AppPagination(props: PaginationProps) {
  return <Pagination showSizeChanger showTotal={(total) => `Total ${total} items`} {...props} />;
}
