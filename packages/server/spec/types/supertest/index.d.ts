import { IUser } from 'hive-link-common';
import 'supertest';


declare module 'supertest' {

  export interface Response  {
    headers: Record<string, string[]>;
    body: {
      error: string;
      users: IUser[];
    };
  }
}