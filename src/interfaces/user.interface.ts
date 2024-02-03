export interface IUser {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
}
export interface IReqGetUser {
    maxResults: number;
    email?: string;
}
