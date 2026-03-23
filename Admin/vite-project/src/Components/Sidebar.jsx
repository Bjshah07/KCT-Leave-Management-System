import { NavLink } from "react-router-dom";
import logo from "../assets/KC_logo-icon.png";
import { LuLogOut, LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { SiGoogledocs } from "react-icons/si";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="w-full h-full  bg-white shadow-md flex flex-col justify-between p-5">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 pb-4 mb-6 ">
          <img src={logo} alt="logo" className="w-8 h-8   shadow-sm" />
          <h1 className="text-sm font-bold text-gray-800 tracking-wide">
            Kalyani Caste Tech Ltd
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <LuLayoutDashboard className="text-xl" /> Dashboard
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <GoPeople className="text-xl" /> Employees
          </NavLink>

          <NavLink
            to="/leaves"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <SiGoogledocs className="text-xl" /> Leave Requests
          </NavLink>

          <NavLink
            to="/balance"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <MdOutlineAccountBalanceWallet className="text-xl" /> Leave Balance
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <IoSettingsOutline className="text-xl" /> Settings
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <button className="w-full flex items-center gap-3 bg-red-600 text-white px-4 py-3 rounded-xl hover:bg-red-700 transition">
        <LuLogOut /> Logout
      </button>
    </div>
  );
}
