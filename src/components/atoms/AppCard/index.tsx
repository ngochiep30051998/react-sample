import clsx from 'clsx';
import { Card } from 'antd';
import type { CardProps } from 'antd';

const DEFAULT_CLASS = 'rounded-2xl shadow-card border border-primary-100/30';

export default function AppCard({
  className,
  hoverable = true,
  ...rest
}: CardProps) {
  return (
    <Card
      hoverable={hoverable}
      className={clsx(DEFAULT_CLASS, className)}
      {...rest}
    />
  );
}
