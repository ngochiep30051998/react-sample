import { Skeleton } from 'antd';
import type { SkeletonProps } from 'antd';

export default function AppSkeleton(props: SkeletonProps) {
  return <Skeleton {...props} />;
}
