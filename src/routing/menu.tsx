import { IMenuItem } from "../interfaces/common.interface"
import { Link, useParams } from 'react-router-dom';
type Props = {
    to: string;
    label?: string;
}
function CustomLabel({ to, label }: Props) {
    const { appId } = useParams();
    return to ? <Link to={`/${appId}${to}` || ''} style={{ color: 'inherit' }}>{label}</Link> : label
}
export function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    to?: string,
    children?: IMenuItem[],
    component?: React.ReactNode,
    onClick?: () => void
): IMenuItem {
    return {
        key,
        icon,
        children: children as IMenuItem[],
        label: <CustomLabel to={to as string} label={label as string}/>,
        to,
        component,
        onClick
    };
}
