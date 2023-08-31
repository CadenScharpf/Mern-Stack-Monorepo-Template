import { Router } from 'express';
import jetValidator from 'jet-validator';

import adminMw from './middleware/adminMw';
import Paths from './constants/Paths';
import User from '@src/models/User';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// **** Setup AuthRouter **** //

const authRouter = Router();

// Register user
authRouter.post(
  Paths.Auth.Register,
  validate(['user', User.isUser]),
  AuthRoutes.register,
);

// Login user
authRouter.post(
  Paths.Auth.Login,
  validate('email', 'password'),
  AuthRoutes.login,
);

// Get current user
authRouter.get(
  Paths.Auth.Me,
  AuthRoutes.me,
);

// Logout user
authRouter.get(
  Paths.Auth.Logout,
  AuthRoutes.logout,
);

// Add AuthRouter
apiRouter.use(Paths.Auth.Base, authRouter);


// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  '/',
  adminMw,
  UserRoutes.getAll,
);

userRouter.get(
  Paths.Users.GetOne,
  //userMw, //!< TODO: Implement userMw
  UserRoutes.getAll, //!< TODO: Implement/change to getOne
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  adminMw,
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  adminMw,
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  adminMw,
  UserRoutes.delete,
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
