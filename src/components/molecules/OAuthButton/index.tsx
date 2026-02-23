import { ReactNode } from 'react';
import { Button } from 'antd';

interface OAuthButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function OAuthButton({ icon, label, onClick }: OAuthButtonProps) {
  return (
    <Button
      size="large"
      block
      className="!h-11 !rounded-xl !border-slate-200 !text-slate-600 flex items-center justify-center gap-2 hover:!border-slate-300 hover:!bg-slate-50"
      icon={icon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
