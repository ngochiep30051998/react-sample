import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

const DEFAULT_CLASS = 'rounded-xl';

export default function AppCollapse({ className, ...rest }: CollapseProps) {
  return <Collapse className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
