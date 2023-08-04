import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function Protected() {
  const userLogged = useSelector((state) => state.user);
  const location = useLocation();
  let isAuthenticated = false;

  if (userLogged.users.length === 0) {
    isAuthenticated = false;
  } else {
    const len = userLogged.users.length - 1;
    isAuthenticated = userLogged.users[len].isLoggedIn;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
