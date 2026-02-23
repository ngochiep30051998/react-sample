import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

export default function AppPopconfirm(props: PopconfirmProps) {
  return <Popconfirm okType="danger" {...props} />;
}
