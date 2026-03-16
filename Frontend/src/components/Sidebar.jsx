// import { useState } from "react"

// const navItems = [
//   { label: "Dashboard", icon: "▦" },
//   { label: "Apply Leave", icon: "👤" },
//   { label: "My Leave", icon: "👤" },
//   { label: "Setting", icon: "⚙️" },
// ]

// export default function Sidebar() {
//   const [active, setActive] = useState("Dashboard")

//   return (
//     <aside className="w-56 h-screen bg-white flex flex-col px-4 py-6 shadow-md">

//       {/* Logo */}
//       <div className="flex items-center gap-3 mb-8">
//         <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg">
//           KC
//         </div>
//         <span className="text-sm font-bold text-slate-800 leading-tight">
//           Kalyani Cast Tech Ltd
//         </span>
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col gap-1 flex-1">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActive(item.label)}
//             className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
//               ${active === item.label
//                 ? "bg-blue-700 text-white shadow-md shadow-blue-200"
//                 : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//           >
//             <span>{item.icon}</span>
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>

//       {/* Logout */}
//       <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200">
//         Logout
//       </button>

//     </aside>
//   )
// }

import { useState } from "react"
import { Settings, LogOut } from 'lucide-react';

const navItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Apply Leave", icon: "👤" },
  { label: "My Leave", icon: "👤" },
  { label: "Setting", icon: <Settings /> },
]

export default function Sidebar({ isDark }) {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="w-56 h-screen bg-white dark:bg-slate-800 flex flex-col px-4 py-6 shadow-md transition-colors duration-300 flex-shrink-0">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-700 text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0">
          KC
        </div>
        <span className="text-sm font-bold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
          Kalyani Cast Tech Ltd
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              ${active === item.label
                ? "bg-blue-700 text-white shadow-md shadow-blue-200"
                : "text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-white"
              }`}
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