// import { Search } from "lucide-react"
// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between px-7 py-4 bg-white border-b border-slate-200">
//       {/* Search Bar */}
//       <div className="flex items-center gap-3 bg-slate-100 rounded-full px-5 py-2.5 w-72">
//         <Search className="text-slate-400 w-4 h-4 shrink-0" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent outline-none text-sm text-slate-600 placeholder-slate-400 w-full"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">

//         {/* Notification */}
//         <button className="text-lg hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200">
//           <IoIosNotificationsOutline className="text-slate-600 text-xl" />
//         </button>

//         {/* Divider */}
//         <div className="w-px h-8 bg-slate-200" />

//         {/* User Info */}
//         <div className="flex items-center gap-2 cursor-pointer group">
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="avatar"
//             className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200"
//           />
//           <div>
//             <p className="text-sm font-semibold text-slate-800 leading-tight">
//               Jhon Deo
//             </p>
//             <p className="text-xs text-slate-400">
//               jhondeo123@gmail.com
//             </p>
//           </div>
//           <span className="text-slate-400 text-xl ml-1">›</span>
//         </div>

//       </div>
//     </header>
//   )
// }

import { useNavigate } from "react-router-dom"
import { Search, Bell, Menu } from "lucide-react"

export default function Header({ setSidebarOpen }) {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between px-4 lg:px-7 py-4 bg-white border-b border-slate-200">

      {/* Left — Hamburger on mobile, Search on desktop */}
      <div className="flex items-center gap-3">

        {/* Hamburger — only on mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-slate-500 hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 w-60">
          <Search className="text-slate-400 w-4 h-4 shrink-0" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-slate-600 placeholder-slate-400 w-full"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 lg:gap-3">

        {/* Notification */}
        <button className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200">
          <Bell className="w-5 h-5 text-slate-500" />
        </button>

        {/* Divider — hidden on mobile */}
        <div className="hidden sm:block w-px h-8 bg-slate-200" />

        {/* User Info */}
        <div
          onClick={() => navigate("/settings")}
          className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-xl transition-colors duration-200"
        >
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="avatar"
            className="w-8 h-8 lg:w-9 lg:h-9 rounded-full object-cover ring-2 ring-slate-200"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800 leading-tight">
              Jhon Deo
            </p>
            <p className="text-xs text-slate-400">
              jhondeo123@gmail.com
            </p>
          </div>
          <span className="hidden md:block text-slate-400 text-xl ml-1">›</span>
        </div>

      </div>
    </header>
  )
}
