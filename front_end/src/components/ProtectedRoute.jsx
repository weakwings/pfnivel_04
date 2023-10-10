import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, redirectTo = "/", rol }) => {
  const storedUserData = localStorage.getItem("userData");
  const userData = JSON.parse(storedUserData);
  const user = userData;

  if (!user || user.usuario.idrol === rol) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet>{children}</Outlet>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  rol: PropTypes.number.isRequired,
};
