import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface UserDropdownProps {
  username: string;
  menuItems: MenuProps['items'];
}

export default function UserDropdown({ username, menuItems }: UserDropdownProps) {
  return (
    <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']}>
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 cursor-pointer hover:bg-white/20 transition-all">
        <Avatar size="small" icon={<UserOutlined />} className="!bg-white !text-primary" />
        <span className="text-white font-medium text-sm hidden sm:inline">{username}</span>
      </div>
    </Dropdown>
  );
}
