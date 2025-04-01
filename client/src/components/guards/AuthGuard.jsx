import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function AuthGuard() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        console.log('You must be logged in to access this page.');
        return <Navigate to="/login" />
    }

    return <Outlet />;
}