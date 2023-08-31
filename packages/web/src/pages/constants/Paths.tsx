import React from "react";
import Login from "../public/Login";
import Profile from "../user/Profile";
import Landing from "../public/Landing";
import Register from "../public/Register";
import User from "../user/User";
import { Route } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
/* Roles: 
- -1: public
-  0: user
-  1: admin 
*/

export interface IPath {
  Base: string;
  Roles: number[];
  Component: React.ReactElement;
  Subpaths: IPath[];
}

const Paths: IPath = {
  Base: "/",
  Roles: [],
  Component: <Landing />, // should redirect to user dashboard if logged in
  Subpaths: [
    {
      Base: "login",
      Roles: [],
      Component: <Login />,
      Subpaths: [],
    },
    {
      Base: "register",
      Roles: [],
      Component: <Register />,
      Subpaths: [],
    },
    {
      Base: "user",
      Roles: [0, 1],
      Component: <User/>,
      Subpaths: [
        {
          Base: "profile",
          Roles: [0, 1],
          Component: <Profile />,
          Subpaths: [],
        },
      ],
    },
  ],
};

export const getPathRoutes = (path: IPath, parentRoute: string, protect?: boolean): React.ReactElement => {
  const absPath = parentRoute + path.Base + "/";
  return (
  <Route path={path.Base} key={absPath + " route"} element={protect? <ProtectedRoute key={absPath + " component"} roles={path.Roles}>{path.Component}</ProtectedRoute>: path.Component} >
  {path.Subpaths.map((subpath) => getPathRoutes(subpath, absPath))}
  </Route>
  );
};

export default Paths;
