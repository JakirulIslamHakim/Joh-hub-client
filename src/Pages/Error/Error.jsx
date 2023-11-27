import Lottie from "lottie-react";
import loginAnimation from "../../assets/Image/errorPage.json";
import "./error.css";
import { NavLink } from "react-router-dom";
// import loginAnimation from "../../assets/Image/RegisterAnimation.json";

const Error = () => {
  return (
    <div className="  ">
      <div className="max-w-7xl mx-auto container md:max-w-[700px]">
        <Lottie animationData={loginAnimation} loop={true} autoplay={true} />
      </div>
      <div className="text-center">
        <button className="btn text-red-700 text-xl font-bold">
          <NavLink to={-1} replace={true}>
            Go Back
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Error;
