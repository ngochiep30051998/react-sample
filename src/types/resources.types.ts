import { IResponse } from "@app/interfaces/common.interface";
import { IResource, IReqCreateResource } from "@app/interfaces/resources.interface";

export type ResourceState = {
    error?: any;
    isLoading?: boolean;
    resources?: IResource[];
}
export type ResourceAction = {
    getResources: () => Promise<void>;
    createResource: (req: IReqCreateResource) => Promise<IResponse<any>>,
    resetResourceStore: () => void
}
export type ResourceStore = ResourceState & ResourceAction;