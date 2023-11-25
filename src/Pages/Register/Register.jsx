import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Image/RegisterAnimation.json";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, image, email, password });
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row  gap-1 lg:gap-28 ">
        <div className="text-center lg:text-left flex-1 w-1/2 lg:w-full">
          <div className="">
            <Lottie
              animationData={registerAnimation}
              loop={true}
              autoplay={true}
            ></Lottie>
          </div>
        </div>

        <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 flex-1 lg:w-1/2">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-5 pb-4 italic">
              Please Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
            </div>
            <div className="form-control mt-2">
              <button className="btn text-xl font-semibold  bg-black  text-white hover:text-black">
                Login
              </button>
            </div>
            <div className="space-y-4 mt-3">
              <p className="text-xl font-semibold text-center">
                Already have an Account ? Please{" "}
                <NavLink className={"underline text-blue-700"} to={"/login"}>
                  Login
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

export default Register;
