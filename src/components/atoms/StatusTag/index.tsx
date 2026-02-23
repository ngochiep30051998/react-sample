import { Tag } from 'antd';

const DEFAULT_COLOR_MAP: Record<string, string> = {
  active: 'green',
  inactive: 'red',
  pending: 'orange',
  processing: 'blue',
  shipped: 'cyan',
  delivered: 'green',
  cancelled: 'red',
  in_stock: 'green',
  out_of_stock: 'volcano',
};

const DEFAULT_LABEL_MAP: Record<string, string> = {
  in_stock: 'In Stock',
  out_of_stock: 'Out of Stock',
};

interface StatusTagProps {
  status: string;
  colorMap?: Record<string, string>;
  labelMap?: Record<string, string>;
  className?: string;
}

export default function StatusTag({ status, colorMap, labelMap, className }: StatusTagProps) {
  const colors = colorMap ?? DEFAULT_COLOR_MAP;
  const labels = { ...DEFAULT_LABEL_MAP, ...labelMap };
  const label = labels[status] ?? status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, ' ');
  return (
    <Tag color={colors[status] ?? 'default'} className={className}>
      {label}
    </Tag>
  );
}
