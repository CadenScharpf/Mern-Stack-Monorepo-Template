import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import SessionUtil from "@src/util/SessionUtil";
import AuthService from "@src/services/AuthService";

import { IReq, IRes } from "./types/express/misc";
import { ISessionUser, ILoginReq, IRegisterReq, ILoginRes, IRegisterRes } from "hive-link-common";
import { INewUser } from "hive-link-common";

// **** Functions **** //


async function me(req: IReq, res: IRes) {
  const user = await AuthService.me(req);
  return res.json({ user: user });
}
/**
 * Login a user.
 **/
async function login(req: IReq<ILoginReq>, res: IRes<ILoginRes>) {
  const { email, password } = req.body;
  // Login
  const user = await AuthService.login(email, password);
  // Setup Admin Cookie
  const sessionUser: ISessionUser = { 
    id: user.id,
    email: user.name,
    name: user.name,
    role: user.role,
    phone: user.phone,
  };
  await SessionUtil.addSessionData(res, sessionUser);
  res.json({ user: sessionUser });
  // Return
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Regester a new user.
 */
async function register(req: IReq<IRegisterReq>, res: IRes<IRegisterRes>) {
  const user = await AuthService.register(req.body.user);
}

/**
 * Logout the user.
 */
function logout(_: IReq, res: IRes) {
  SessionUtil.clearCookie(res);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  login,
  logout,
  register,
  me,
} as const;
