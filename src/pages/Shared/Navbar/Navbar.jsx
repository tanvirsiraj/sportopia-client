import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  const navItems1 = (
    <div className="flex flex-col lg:flex-row primary-color lg:text-white gap-3 lg:gap-10 font-semibold text-lg mb-6 lg:mb-0">
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
    <div>
      {/*  <div>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ActiveLink>
          <button>Logout</button>
        </ActiveLink>
      </div> */}
      <ActiveLink to="/login">
        <button className="btn btn-bg-white primary-color font-semibold text-lg ">
          Login
        </button>
      </ActiveLink>
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
