import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#E5E6E6]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full ">
          {/* Sidebar content here */}

          <li>
            <NavLink to="/dashboard/myselectedclasses">
              <FaShoppingCart></FaShoppingCart> My Selected Classes{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
