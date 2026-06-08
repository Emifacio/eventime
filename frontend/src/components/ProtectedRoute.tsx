import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  redirectTo: string;
  isAllowed: boolean;
  loading?: boolean;
  children?: ReactNode;
}

export const ProtectedRoute = ({ redirectTo, isAllowed, loading, children }: ProtectedRouteProps) => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
          <p className="text-slate-400 font-medium">Cargando...</p>
        </div>
      );
    }

    if (!isAllowed) return <Navigate to={redirectTo} replace />;
   
    return children ? <>{children}</> : <Outlet />;
};
