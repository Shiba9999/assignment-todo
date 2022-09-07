import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo, isLoggedIn }) {
  let isAuthenticated = isLoggedIn;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default RequireAuth;
