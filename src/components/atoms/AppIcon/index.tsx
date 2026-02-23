import clsx from 'clsx';
import { ReactNode } from 'react';

interface AppIconProps {
  icon: ReactNode;
  size?: number | string;
  color?: string;
  className?: string;
}

export default function AppIcon({ icon, size = 16, color, className }: AppIconProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center',
        className
      )}
      style={{ fontSize: size, color }}
    >
      {icon}
    </span>
  );
}
