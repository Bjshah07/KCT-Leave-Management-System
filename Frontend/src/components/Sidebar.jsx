// import { Settings, LogOut } from 'lucide-react';
// import { MdDashboard } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FcLeave } from "react-icons/fc";
// import { MdOutlineWorkHistory } from "react-icons/md";
// import { RxDashboard } from "react-icons/rx";
// import KC from "../assets/KC_logo-icon.png"

// const navItems = [
//   { label: "Dashboard", icon: <RxDashboard className="text-xl" /> },
//   { label: "Apply Leave", icon: <FcLeave className="text-xl" /> },
//   { label: "My Leave", icon: <MdOutlineWorkHistory className="text-xl" /> },
//   { label: "Setting", icon: <IoSettingsOutline className="text-xl" /> },
// ]

// export default function Sidebar() {

//   return (
//     <aside className="w-56 h-screen bg-white flex flex-col px-4 py-6 shadow-md shrink-0">
//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="bg-blue-700 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-lg shrink-0">
//           <img src={KC} />
//         </div>
//         <span className="text-sm font-bold text-slate-800 leading-tight">
//           Kalyani Cast Tech Ltd
//         </span>
//       </div>

//       <div className="border-black/20 -mt-4 mb-4 border-t-2" />

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActive(item.label)}
//             className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 `}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         <span><LogOut /></span> Logout
//       </button>
//     </aside>
//   )
// }

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { LayoutDashboard, CalendarPlus, CalendarDays, Settings, LogOut, X } from "lucide-react"
import LogoutModal from "./LogoutModal"
import KC from "../assets/KC_logo-icon.png"

const navItems = [
  { label: "Dashboard",   icon: LayoutDashboard, path: "/dashboard"   },
  { label: "Apply Leave", icon: CalendarPlus,    path: "/apply-leave" },
  { label: "My Leave",    icon: CalendarDays,    path: "/my-leave"    },
  { label: "Setting",     icon: Settings,        path: "/settings"    },
]

export default function Sidebar({ setSidebarOpen }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showLogout, setShowLogout] = useState(false)

  const handleNav = (path) => {
    navigate(path)
    setSidebarOpen(false)
  }

  const handleLogoutConfirm = () => {
    setShowLogout(false)
    navigate("/")
  }

  return (
    <>
      <aside className="w-56 h-screen bg-white flex flex-col px-4 py-6 shadow-md flex-shrink-0">

        {/* Logo + Close button on mobile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
               <img src={KC} />
            </div>
            <span className="text-sm font-bold text-slate-800 leading-tight">
              Kalyani Cast Tech Ltd
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                  ${location.pathname === item.path
                    ? "bg-blue-700 text-white shadow-md shadow-blue-200"
                    : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogout(true)}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </aside>

      {/* Logout Modal */}
      {showLogout && (
        <LogoutModal
          onCancel={() => setShowLogout(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </>
  )
}
