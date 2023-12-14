import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FidgetSpinner } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center mt-10 md:mt-40">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
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
