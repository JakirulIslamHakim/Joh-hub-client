import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <p> Loading...........</p>;
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate to={"/login"} replace={true} state={location.pathname}>
      {" "}
    </Navigate>
  );
};

export default PrivateRoute;
