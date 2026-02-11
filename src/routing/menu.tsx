import { Link } from 'react-router';
import { IMenuItem } from '../interfaces/common.interface';

type Props = {
  to: string;
  label?: React.ReactNode;
};

function CustomLabel({ to, label }: Props) {
  return to ? (
    <Link to={to} style={{ color: 'inherit' }}>
      {label}
    </Link>
  ) : (
    label
  );
}

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  to?: string,
  children?: IMenuItem[],
  component?: React.ReactNode,
  onClick?: () => void,
  permission?: string
): IMenuItem {
  return {
    key,
    icon,
    children: children as IMenuItem[],
    label: to ? <CustomLabel to={to} label={label} /> : label,
    to,
    component,
    onClick,
    permission,
  };
}
