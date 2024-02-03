import { IAttributes } from "./common.interface";
import { IResourceScope } from "./resources.interface";

export interface IRole {
    id: string;
    name: string;
    attributes: IAttributes;
    description?: string;
}


export interface IReqGetRoles {
    page?: number;
    pageSize?: number
}

export interface IReqCreateRole {
    name: string;
    attributes?: IAttributes[];
    resourceScopes?: IResourceScope[];
    description?: string;
}

export interface IReqAssignRole {
    roleIds: string[],
    userId: string
}
