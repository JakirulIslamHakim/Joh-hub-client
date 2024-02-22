import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { logoutUser, user } = useAuth();
  const navigate = useNavigate();

  // console.log(user);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/findJob"}>Find Job</NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"}>Post a job</NavLink>
      </li>
      <li>
        <NavLink to={"/myPostedJobs"}>My posted jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/myBidsJob"}>My Bids</NavLink>
      </li>
      <li>
        <NavLink to={"/bidRequest"}>Bid Requests</NavLink>
      </li>
      {/* <li className="hidden lg:block">
        <NavLink to={"/login"}>Login</NavLink>
      </li> */}
      <li className="hidden lg:block">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end rounded-full">
            <div tabIndex={0} className=" ">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-72 py-4"
            >
              <li>
                <a>
                  {user?.displayName ? user.displayName : "unknown username"}
                </a>
              </li>
              <li>
                <a>{user?.email}</a>
              </li>
              <>
                <li
                  className="btn  text-base flex items-center"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </>
            </ul>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </li>
      {/* <li className="hidden lg:block">
        {user ? (
          <p onClick={handleLogout}>logout</p>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </li> */}
    </>
  );

  // should have a navbar with the name+logo,Home,Add job,My posted jobs,My Bids,Bid
  // Requests,user profile picture and user name and Register/login

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-white">
        {/* Navbar */}
        <div className=" shadow-2xl ">
          <div className="w-full navbar bg-base-300 border-b border-black">
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
              <div className="flex- px-2 mx-2 text-left text-4xl font-bold w-20 lg:w-24  ">
                <img
                  className="w-full rounded-full lg:ml-6"
                  src="https://i.ibb.co/G95bnRK/Screenshot-29.png"
                  alt=""
                />
              </div>
              <ul className="pr-2">
                <li className="lg:hidden text-base font-bold">
                  {user ? (
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div tabIndex={0} role="button" className=" ">
                        <div className="avatar">
                          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                              src={
                                user?.photoURL
                                  ? user?.photoURL
                                  : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-64"
                      >
                        <li>
                          <a>
                            {user?.displayName
                              ? user.displayName
                              : "unknown username"}
                          </a>
                        </li>
                        <li>
                          <a>{user?.email}</a>
                        </li>
                        <li>
                          <a
                            className="btn w-full text-base flex items-center"
                            onClick={handleLogout}
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                  )}
                </li>
              </ul>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-base font-bold flex  items-center">
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
        {/* {children} */}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base font-bold text-center ">
          {/* Sidebar content here */}
          <div>
            <div className="px-2 mx-2  w-20 lg:w-24 py-5  ">
              <img
                className="w-full rounded-full lg:ml-6"
                src="https://i.ibb.co/G95bnRK/Screenshot-29.png"
                alt=""
              />
            </div>
            {navLink}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
