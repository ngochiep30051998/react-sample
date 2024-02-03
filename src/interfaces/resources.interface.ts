import { Scope } from "@app/enums";
import { IAttributes } from "./common.interface";

export interface IResource {
    id: string;
    name: string;
    scope: string;
    display: string;
    attributes?: IAttributes;
    key: string;
    uri?: string;
}

export interface IResourceScope {
    resourceId: string;
    scope: string;
}

export interface IReqCreateResource {
    resources: IReqResource[]
}

export interface IReqResource {
    defaultRoles?: string;
    name: string;
    uri: string;
    scopes: Scope[],
    attributes?: IAttributes[]
}
