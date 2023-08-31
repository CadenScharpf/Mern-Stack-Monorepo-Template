import { INewUser, ISessionUser } from "./User";

// **** Request / Response Types **** //

export interface ILoginReq {
  email: string;
  password: string;
}

export interface ILoginRes {
    user: ISessionUser;
}

export interface IRegisterReq {
  user: INewUser;
}

export interface IRegisterRes {
    user: ISessionUser;
}