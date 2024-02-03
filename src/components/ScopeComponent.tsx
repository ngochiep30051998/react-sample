import { Scope } from "@app/enums";
import { Tag } from "antd";

type Props = {
    scope: Scope;
}
export default function ScopeComponent({ scope }: Props) {
    switch (scope) {
        case Scope.POST:
            return <Tag color="green">{scope}</Tag>
        case Scope.DELETE:
            return <Tag color="red">{scope}</Tag>
        case Scope.GET:
            return <Tag color="blue">{scope}</Tag>
        case Scope.PUT:
            return <Tag color="gold">{scope}</Tag>
        case Scope.PATCH:
            return <Tag color="volcano">{scope}</Tag>
        default: return scope || 'N/A';
    }
}