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
        className="absolute inset-0 w-full h-full object-center"
      />

      {/* Signup Container */}
      <div className="sticky flex items-center justify-center min-h-screen px-4">
        <div className="bg-gray-100/70 text-black border-2 border-[#2354A2] rounded-3xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 bg-gray-200 p-5 md:p-6 border-b-2 border-[#2354A2]">
            <div className="bg-[#2354A2]  flex items-center justify-center">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#2354A2]">
                Create your account
              </h1>
              <p className="text-xs md:text-sm font-medium text-[#2354A2]">
                Sign up to access your leave management portal
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Signup submitted");
              }}
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  defaultValue="+91"
                  required
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                />
              </div>
              {/* Designation */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Designation
                </label>

                <div className="relative">
                  <select
                    name="designation"
                    required
                    className="w-full px-4 py-3 border border-[#2354A2] rounded-xl appearance-none  focus:ring-2 focus:ring-[#2354A2] focus:outline-none  "
                  >
                    <option>Select designation</option>
                    <option>Developer</option>
                    <option>Manager</option>
                    <option>HR</option>
                    <option>Intern</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2354A2] pointer-events-none" />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-[#2354A2] mb-2 font-medium">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  required
                  placeholder="Enter address"
                  className="w-full px-4 py-3 border border-[#2354A2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2354A2]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#2354A2] text-white py-3 rounded-xl font-semibold hover:bg-[#1e4486] transition"
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
