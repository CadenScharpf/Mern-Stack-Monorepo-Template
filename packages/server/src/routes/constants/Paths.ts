/**
 * Express router paths go here.
 */

import { Immutable } from '@src/other/types';


const Paths = {
  Base: '/api',
  Auth: {
    Base: '/auth',
    Me: '/me',
    Login: '/login',
    Logout: '/logout',
    Register: '/register',
  },
  Users: {
    Base: '/users',
    GetOne: '/:id',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
