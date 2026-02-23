import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const DEFAULT_CLASS = 'rounded-xl';

export default function AppTabs({ className, ...rest }: TabsProps) {
  return <Tabs className={`${DEFAULT_CLASS} ${className ?? ''}`.trim()} {...rest} />;
}
