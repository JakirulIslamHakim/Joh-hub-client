import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"}>Add job</NavLink>
      </li>
      <li>
        <NavLink to={"/postedJob"}>My posted jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/bids"}>My Bids</NavLink>
      </li>
      <li>
        <NavLink to={"/bidRequest"}>Bid Requests</NavLink>
      </li>
      <li className="hidden lg:block">
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );

  // should have a navbar with the name+logo,Home,Add job,My posted jobs,My Bids,Bid
  // Requests,user profile picture and user name and Register/login

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className=" shadow-2xl shadow-">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className=" max-w-7xl w-full mx-auto flex justify-between">
              <div className="flex- px-2 mx-2 text-left text-4xl font-bold w-28 ">
                  <img
                    className="w-full rounded-full"
                    src="https://i.ibb.co/G95bnRK/Screenshot-29.png"
                    alt=""
                  />
              </div>
              <ul className="pr-7">
                <li className="lg:hidden btn text-xl font-bold">
                  <NavLink to={"/login"}>Loginxz</NavLink>
                </li>
              </ul>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-base font-bold">
                  {/* Navbar menu content here */}
                  {navLink}
                </ul>
                {/* <>
                  <li className="lg:hidden">
                    <NavLink to={"/login"}>Loginxx</NavLink>
                  </li>
                </> */}
              </div>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {/* Content */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base font-bold text-center">
          {/* Sidebar content here */}
          {navLink}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
