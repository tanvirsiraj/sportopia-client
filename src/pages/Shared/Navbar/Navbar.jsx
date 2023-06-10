import { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log('You are successfully LoggedOut');
      })
      .catch((error) => console.log(error));
  };

  const navItems1 = (
    <div className="flex flex-col lg:flex-row primary-color lg:text-white gap-3 lg:gap-10 font-semibold text-lg mb-6 lg:mb-0 ">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink
        className="text-lg  font-semibold mt-2 lg:mt-0 lg:ms-14"
        to="/instructors"
      >
        Instructors
      </ActiveLink>
      <ActiveLink
        className="text-lg font-semibold mt-2 lg:mt-0 mb-6 lg:mb-0 lg:ms-14"
        to="/classes"
      >
        Classes
      </ActiveLink>
    </div>
  );
  const navItems2 = (
    <div className="nav">
      {user ? (
        <>
          <div className="lg:flex items-center dash">
            <ActiveLink
              to="/dashboard"
              className="text-lg dash text-[#0057b8] lg:text-white font-semibold mt-2 lg:mt-0 lg:ms-14 "
            >
              Dashboard
            </ActiveLink>

            <div className="w-10 rounded-full  lg:me-2 lg:ms-8 mt-6 lg:mt-2 ">
              <div
                className="avatar tooltip tooltip-bottom "
                data-tip={user?.displayName}
              >
                <div
                  className="w-12 rounded-full ring ring-[white] ring-offset-base-100 ring-offset-2 lg:items-center"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="ms-0 lg:ms-8 mt-2 lg:mt-0 font-bold"
            >
              <button className="btn btn-outline btn-primary logout  border-0 mt-4">
                Logout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <ActiveLink to="/login">
          <button className="btn btn-bg-white primary-color font-semibold text-lg ">
            Login
          </button>
        </ActiveLink>
      )}
    </div>
  );

  return (
    <div className="primary-bg-color lg:px-32 text-white navbar bg-base-100 w-full">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems1}
            {navItems2}
          </ul>
        </div>

        <h1 className="font-bold text-2xl">Sportopia</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems1}</ul>
      </div>
      <div className="navbar-end invisible lg:visible ">{navItems2}</div>
    </div>
  );
};

export default Navbar;
