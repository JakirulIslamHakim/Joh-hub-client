import Lottie from "lottie-react";
import loginAnimation from "../../assets/Image/login.json";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const emailRef = useRef();
  // console.log(emailRef.current.emailRef);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row  gap-1 lg:gap-28 ">
        <div className="text-center lg:text-left flex-1 w-1/2 lg:w-full">
          <div className="">
            <Lottie
              animationData={loginAnimation}
              loop={true}
              autoplay={true}
            ></Lottie>
          </div>
        </div>

        <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 flex-1 lg:w-1/2">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-5 pb-4 italic">
              Please Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn text-xl font-semibold  bg-black  text-white hover:text-black">
                Login
              </button>
            </div>
            <div className="space-y-4 mt-3">
              <div>
                <p className="text-xl text-center font-medium mb-1">
                  Login with
                </p>
                <button
                  onClick={handleGoogleLogin}
                  className="btn w-full text-xl font-bold bg-gray-500  text-white hover:text-black"
                >
                  {" "}
                  <span className="text-3xl">
                    <FcGoogle />
                  </span>{" "}
                  Goggle
                </button>
              </div>
              <p className="text-xl font-semibold text-center">
                New Here ? Please{" "}
                <NavLink className={"underline text-blue-700"} to={"/register"}>
                  Register
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
