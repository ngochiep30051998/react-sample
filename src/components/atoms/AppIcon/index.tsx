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
      className={`inline-flex items-center justify-center ${className ?? ''}`}
      style={{ fontSize: size, color }}
    >
      {icon}
    </span>
  );
}
