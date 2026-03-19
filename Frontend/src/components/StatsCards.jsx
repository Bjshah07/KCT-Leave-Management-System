// import { User, UserRound } from 'lucide-react';

// const stats = [
//   {
//     count: 5,
//     label: "Annual Leave Left",
//     sub: "5 used of 10",
//     color: "text-blue-500",
//     border: "border-t-blue-500",
//     icon: <UserRound />,
//   }
//   {
//     count: 0,
//     label: "Approved",
//     sub: "Fully Confirmed",
//     color: "text-emerald-500",
//     border: "border-t-emerald-500",
//     icon: <UserRound />,
//   },
//   {
//     count: 1,
//     label: "In Progress",
//     sub: "Awaiting approval",
//     color: "text-amber-500",
//     border: "border-t-amber-500",
//     icon: <UserRound />,
//   },
//   {
//     count: 2,
//     label: "Sick Leave Left",
//     sub: "3 used of 5",
//     color: "text-red-500",
//     border: "border-t-red-500",
//     icon: <UserRound />,
//   },
// ]

// export default function StatsCards() {
//   return (
//     <div className="grid grid-cols-4 gap-4 mb-6">
//       {stats.map((stat, i) => (
//         <div
//           key={i}
//           className={`bg-white rounded-xl p-5 shadow-sm border-t-4 ${stat.border} transition-colors duration-300`}
//         >
//           <div className={`text-2xl mb-2 ${stat.color}`}>{stat.icon}</div>
//           <div className="flex items-baseline gap-2">
//             <span className="text-3xl font-bold text-slate-800 duration-300">
//               {stat.count}
//             </span>
//             <span className="text-sm font-semibold text-slate-700 transition-colors duration-300">
//               {stat.label}
//             </span>
//           </div>
//           <p className="text-xs text-slate-400 mt-1 transition-colors duration-300">
//             {stat.sub}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

import { UserRound } from 'lucide-react';

const stats = [
  { count: 5, label: "Annual Leave Left", sub: "5 used of 10",      color: "text-red-500",     border: "border-t-blue-500",    icon: <UserRound /> },
  { count: 2, label: "Sick Leave Left",   sub: "3 used of 5",       color: "text-amber-500",   border: "border-t-amber-500",   icon: <UserRound /> },
  { count: 0, label: "Approved",          sub: "Fully Confirmed",   color: "text-emerald-500", border: "border-t-emerald-500", icon: <UserRound /> },
  { count: 0, label: "In Progress",       sub: "Awaiting approval", color: "text-red-500",     border: "border-t-red-500",     icon: <UserRound /> },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
      {stats.map((stat, i) => (
        <div key={i} className={`bg-white rounded-xl p-4 lg:p-5 shadow-sm border-t-4 ${stat.border}`}>
          <div className={`text-xl lg:text-2xl mb-2 ${stat.color}`}>{stat.icon}</div>
          <div className="flex items-baseline gap-1 lg:gap-2 flex-wrap">
            <span className="text-2xl lg:text-3xl font-bold text-slate-800">
              {stat.count}
            </span>
            <span className="text-xs lg:text-sm font-semibold text-slate-700">
              {stat.label}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
        </div>
      ))}
    </div>
  )
}