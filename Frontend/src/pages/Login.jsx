import React, { useState } from "react";
import { Link } from "react-router-dom";
import slider from "../assets/Main-slider.jpg";
import logo from "../assets/KC_logo-icon.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed min-h-screen min-w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slider}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Login Container */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div className="bg-gray-100/70 border-2 border-[#2354A2] rounded-3xl shadow-lg w-full max-w-md md:max-w-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 bg-gray-200 p-5 md:p-6 border-b border-[#2354A2]">
            <div className="bg-[#2354A2] flex items-center justify-center">
              <img
                src={logo}
                alt="logo-image"
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#2354A2]">
                Welcome back
              </h1>
              <p className="text-xs md:text-sm font-medium text-[#2354A2]">
                Login to access your leave management portal
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8 space-y-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Login submitted");
              }}
              className="space-y-5"
            >
              {/* Employee ID */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Employee Id
                </label>

                <input
                  type="text"
                  name="employeeId"
                  required
                  placeholder="Enter Employee Id"
                  className="w-full px-4 py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 pr-12 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                  />
                  <div 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700 p-1" 
                    onClick={togglePassword}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#2354A2] text-white py-3 rounded-xl font-semibold hover:bg-[#1e4486] transition"
              >
                LOGIN
              </button>
            </form>

            {/* Footer */}
            <Link
              to="/signup"
              className="text-center font-semibold text-gray-800 cursor-pointer hover:text-[#2354A2] block"
            >
              New User?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

