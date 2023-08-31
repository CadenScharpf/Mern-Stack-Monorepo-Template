import { UserRoles } from "hive-link-common";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/auth";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  children: React.ReactNode;
  roles: UserRoles[];
}
export function ProtectedRoute(props: IProtectedRouteProps) {
  const { children, roles } = props;
  const auth = useAuth();

  return roles.length === 0 || (auth.user && auth.user.role && roles.indexOf(auth.user.role) !== -1) ? (
    <>{children}</>
  ) :  (
    <div>Not Authorized</div>
  );
}

export default ProtectedRoute;
