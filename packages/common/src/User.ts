// **** User Types **** //
export enum UserRoles {
    Standard,
    Admin,
  }
  export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    role?: UserRoles;
    pwdHash?: string;
  }
  export interface ISessionUser {
    id: number;
    email: string;
    name: string;
    role: IUser['role'];
    phone: string;
  }
  export interface INewUser {
    name: string;
    email: string;
    phone: string;
    password: string;
  }

