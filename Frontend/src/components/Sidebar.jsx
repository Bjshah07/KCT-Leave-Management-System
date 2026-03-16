import { Settings, LogOut } from 'lucide-react';
import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FcLeave } from "react-icons/fc";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import KC from "../assets/KC_logo-icon.png"

const navItems = [
  { label: "Dashboard", icon: <RxDashboard className="text-xl" /> },
  { label: "Apply Leave", icon: <FcLeave className="text-xl" /> },
  { label: "My Leave", icon: <MdOutlineWorkHistory className="text-xl" /> },
  { label: "Setting", icon: <IoSettingsOutline className="text-xl" /> },
]

export default function Sidebar() {

  return (
    <aside className="w-56 h-screen bg-white flex flex-col px-4 py-6 shadow-md shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-700 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-lg shrink-0">
          <img src={KC} />
        </div>
        <span className="text-sm font-bold text-slate-800 leading-tight">
          Kalyani Cast Tech Ltd
        </span>
      </div>

      <div className="border-black/20 -mt-4 mb-4 border-t-2" />

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 `}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
        <span><LogOut /></span> Logout
      </button>
    </aside>
  )
}
