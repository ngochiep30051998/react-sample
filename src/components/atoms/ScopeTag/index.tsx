import { Scope } from '@app/enums';
import { Tag } from 'antd';

const SCOPE_COLOR: Record<Scope, string> = {
  [Scope.GET]: 'blue',
  [Scope.POST]: 'green',
  [Scope.PUT]: 'gold',
  [Scope.DELETE]: 'red',
  [Scope.PATCH]: 'volcano',
};

interface ScopeTagProps {
  scope: Scope;
  className?: string;
}

export default function ScopeTag({ scope, className }: ScopeTagProps) {
  const color = SCOPE_COLOR[scope];
  if (!color) return <>{scope || 'N/A'}</>;
  return (
    <Tag color={color} className={className}>
      {scope}
    </Tag>
  );
}
