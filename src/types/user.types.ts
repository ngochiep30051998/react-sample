import { IUser, IReqGetUser } from "@app/interfaces/user.interface";

export type UserState = {
    users?: IUser[];
    loading: boolean;
}
export type UserAction = {
    getUsers: (req: IReqGetUser) => Promise<void>;
    resetUserStore: () => void;
}


export type UserStore = UserState & UserAction;