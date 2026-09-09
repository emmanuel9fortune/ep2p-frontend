import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext";

export default function ProtectedLogRoute() {
  const {
    isAuthenticated,
    loading,
  } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070b16] text-white">
        <div className="text-sm text-white/50">
          Checking your session...
        </div>
      </div>
    );
  }

  if(isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }
  

  return <Outlet />;
}