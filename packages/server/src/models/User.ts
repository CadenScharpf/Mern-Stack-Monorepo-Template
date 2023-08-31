import { UserRoles, IUser, ISessionUser } from 'hive-link-common';


// **** Variables **** //
const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an ' + 
  'object with the appropriate user keys.';

// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  name?: string,
  email?: string,
  role?: UserRoles,
pwdHash?: string,
  id?: number, // id last cause usually set by db
  phone?: string,
): IUser {
  return {
    id: (id ?? -1),
    name: (name ?? ''),
    email: (email ?? ''),
    role: (role ?? UserRoles.Standard),
    pwdHash: (pwdHash ?? ''),
    phone: (phone ?? ''),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUser {
  // Check is user
  if (!isUser(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get user instance
  const p = param as IUser;
  return new_(p.name, p.email, p.role, p.pwdHash, p.id, p.phone);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'email' in arg &&
    'name' in arg &&
    'role' in arg &&
    'phone' in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isUser,
} as const;
