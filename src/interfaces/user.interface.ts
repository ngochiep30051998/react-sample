export interface IUser {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  roles?: string[];
  permissions?: string[];
}

export interface IReqGetUser {
  maxResults: number;
  email?: string;
}
