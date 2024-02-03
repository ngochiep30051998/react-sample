import { IResponse } from "@app/interfaces/common.interface";
import { IRole, IReqGetRoles, IReqCreateRole, IReqAssignRole } from "@app/interfaces/roles.interface";

export type RoleState = {
    error: any;
    isLoading: boolean;
    roles: IRole[];
}
export type RoleAction = {
    getRoles: (req: IReqGetRoles) => Promise<void>;
    createRole: (req: IReqCreateRole) => Promise<IResponse<any>>,
    assignRole: (req: IReqAssignRole) => Promise<IResponse<any>>
    resetRoleStore: () => void
}
export type RoleStore = RoleState & RoleAction;