import clsx from 'clsx';
import { ReactNode } from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface StatCardProps {
  title: string;
  value: number | string;
  prefix?: ReactNode;
  valueColor?: string;
  trend?: number;
  suffix?: ReactNode;
  hoverable?: boolean;
}

export default function StatCard({ title, value, prefix, valueColor, trend, suffix, hoverable = true }: StatCardProps) {
  const trendSuffix = trend !== undefined ? (
    <span
        className={clsx(
          'text-xs font-medium',
          trend >= 0 ? 'text-emerald-500' : 'text-red-500'
        )}
      >
      {trend >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(trend)}%
    </span>
  ) : undefined;

  return (
    <Card hoverable={hoverable}>
      <Statistic
        title={<span className="text-slate-500 font-medium">{title}</span>}
        value={value}
        prefix={prefix}
        suffix={suffix ?? trendSuffix}
        valueStyle={{ color: valueColor, fontWeight: 700 }}
      />
    </Card>
  );
}
