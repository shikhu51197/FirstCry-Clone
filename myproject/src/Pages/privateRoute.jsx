import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.Authentication.isAuth);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
