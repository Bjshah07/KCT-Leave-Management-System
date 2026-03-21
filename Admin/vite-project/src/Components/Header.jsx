import React from "react";
import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="bg-white px-4 sm:px-6 py-3 flex items-center justify-between  ">
      
      {/* Search */}
      <div className="w-full max-w-md relative">
        <input
          type="text"
          placeholder="Search employees, leaves..."
          className="w-full pl-12 pr-5 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Icon */}
        <IoIosSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6 ml-4">
        
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-lg hover:text-blue-500 transition" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-semibold">
            ER
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">Emily Rodriguez</p>
            <p className="text-xs text-gray-500">HR Admin</p>
          </div>
          <RiArrowDropDownLine className="text-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Header;