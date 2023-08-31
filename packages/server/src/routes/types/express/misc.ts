import * as e from 'express';

import { ISessionUser } from 'hive-link-common';


// **** Express **** //

export interface IReq<T = void> extends e.Request {
  body: T;
}

export interface IRes<T = void> extends e.Response {
  locals: {
    sessionUser?: ISessionUser;
  };
}
