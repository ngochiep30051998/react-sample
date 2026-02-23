import clsx from 'clsx';
import { ReactNode } from 'react';

interface GradientAvatarProps {
  icon: ReactNode;
  size?: number;
  className?: string;
}

export default function GradientAvatar({ icon, size = 40, className }: GradientAvatarProps) {
  return (
    <div
      className={clsx(
        'rounded-[10px] flex items-center justify-center',
        'text-white shrink-0 shadow-md',
        'bg-gradient-to-br from-primary to-accent',
        className
      )}
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      {icon}
    </div>
  );
}
