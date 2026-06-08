import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { TbSparkles } from "react-icons/tb";

interface ProtectedRouteProps {
  redirectTo: string;
  isAllowed: boolean;
  loading?: boolean;
  children?: ReactNode;
}

export const ProtectedRoute = ({ redirectTo, isAllowed, loading, children }: ProtectedRouteProps) => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-y-6 select-none">
          {/* Animated App Icon */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute w-20 h-20 bg-sky-500/10 rounded-full animate-ping duration-1000"></div>
            <div className="absolute w-14 h-14 bg-violet-500/20 rounded-full animate-pulse"></div>
            
            {/* Central gradient icon */}
            <div className="relative w-14 h-14 bg-gradient-to-tr from-sky-500 via-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <TbSparkles className="text-white text-2xl animate-pulse" />
            </div>
          </div>

          {/* Texts */}
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-white bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
              Eventime
            </h3>
            <p className="text-sm text-zinc-400 max-w-xs mx-auto px-4">
              Preparando tu espacio... esto puede tardar un momento si el servidor estaba inactivo.
            </p>
          </div>

          {/* Elegant shimmer loading bar */}
          <div className="w-40 h-1 bg-zinc-800 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 rounded-full w-1/2 animate-shimmer"></div>
          </div>
        </div>
      );
    }

    if (!isAllowed) return <Navigate to={redirectTo} replace />;
   
    return children ? <>{children}</> : <Outlet />;
};
