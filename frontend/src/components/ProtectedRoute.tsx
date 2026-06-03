import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  redirectTo: string;
  isAllowed: boolean;
  children?: ReactNode;
}

export const ProtectedRoute = ({ redirectTo, isAllowed, children }: ProtectedRouteProps) => {
    if (!isAllowed) return <Navigate to={redirectTo} replace />;
   
    return children ? <>{children}</> : <Outlet />;
};
