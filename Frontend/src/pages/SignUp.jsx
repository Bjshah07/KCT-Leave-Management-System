import React from "react";
import slider from "../assets/Main-slider.jpg";
import logo from "../assets/KC_logo-icon.png";
import { FaChevronDown } from "react-icons/fa";

function Signup() {
  return (
    <div className="fixed min-h-screen min-w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={slider}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Signup Container */}
      <div className="sticky flex flex-col md:flex-row items-center justify-center min-h-screen px-2 sm:px-4">
        <div className="bg-gray-100/70 text-black border-2 border-[#2354A2] rounded-3xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 bg-gray-200 p-3 sm:p-4 md:p-5 lg:p-6 border-b-2 border-[#2354A2]">
            <div className="bg-[#2354A2] flex items-center justify-center p-2">
              <img
                src={logo}
                alt="logo"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2354A2]">
                Create your account
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-medium text-[#2354A2]">
                Sign up to access your leave management portal
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-5 md:p-6 lg:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Signup submitted");
              }}
              className="space-y-3 sm:space-y-4 md:space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium text-sm sm:text-base">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2] text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium text-sm sm:text-base">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2] text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium text-sm sm:text-base">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  defaultValue="+91"
                  maxLength="13"
                  pattern="[0-9]{13}"
                  required
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2] text-sm sm:text-base"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium text-sm sm:text-base">
                  Designation
                </label>

                <div className="relative">
                  <select
                    name="designation"
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#2354A2] rounded-xl appearance-none focus:ring-2 focus:ring-[#2354A2] focus:outline-none text-sm sm:text-base"
                  >
                    <option>Select designation</option>
                    <option>Senior Engineer</option>
                    <option>Production</option>
                    <option>Quality Engineer</option>
                    <option>Maintenance</option>
                  </select>
                  <FaChevronDown className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-[#2354A2] text-sm sm:text-base pointer-events-none" />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium text-sm sm:text-base">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Enter address"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2] text-sm sm:text-base"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#2354A2] text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-[#1e4486] transition text-sm sm:text-base"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
