// import { useState } from "react"

// const filters = ["All", "Pending", "Approved", "Rejected"]

// const leaves = [
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: true }], status: "Approved" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Rejected" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: true }, { label: "Manager", approved: true }, { label: "Hr", approved: true }], status: "Approved" },
//   { type: "Annual Leave", dates: "10 JUL 2025 - 15 JUL 2025", days: 5, steps: [{ label: "Director", approved: false }, { label: "Manager", approved: false }, { label: "Hr", approved: false }], status: "Pending" },
// ]

// const statusStyles = {
//   Pending:  { badge: "bg-amber-100  dark:bg-amber-900/40  text-amber-700  dark:text-amber-400"  },
//   Approved: { badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400" },
//   Rejected: { badge: "bg-red-100    dark:bg-red-900/40    text-red-700    dark:text-red-400"    },
// }

// const filterStyles = {
//   All:      "bg-slate-800  dark:bg-white      text-white dark:text-slate-800",
//   Pending:  "bg-amber-100  dark:bg-amber-900/40  text-amber-700  dark:text-amber-400",
//   Approved: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400",
//   Rejected: "bg-red-100    dark:bg-red-900/40    text-red-700    dark:text-red-400",
// }

// export default function MyLeave() {
//   const [activeFilter, setActiveFilter] = useState("All")

//   const filtered = activeFilter === "All"
//     ? leaves
//     : leaves.filter((l) => l.status === activeFilter)

//   return (
//     <>
//       {/* Page Title */}
//       <h1 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">
//         My Leave History
//       </h1>
//       <p className="text-sm text-slate-400 dark:text-slate-500 mb-5 transition-colors duration-300">
//         Track all your leave requests in one place
//       </p>

//       {/* Filter Buttons */}
//       <div className="flex items-center gap-2 mb-5">
//         {filters.map((f) => (
//           <button
//             key={f}
//             onClick={() => setActiveFilter(f)}
//             className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
//               ${activeFilter === f
//                 ? filterStyles[f]
//                 : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600"
//               }`}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* Table */}
//       <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-slate-100 dark:border-slate-700">
//               {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
//                 <th
//                   key={h}
//                   className="text-left text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider px-6 py-4"
//                 >
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((row, i) => (
//               <tr
//                 key={i}
//                 className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
//               >
//                 {/* Type */}
//                 <td className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
//                   {row.type}
//                 </td>

//                 {/* Dates */}
//                 <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
//                   {row.dates}
//                 </td>

//                 {/* Days */}
//                 <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
//                   {row.days}
//                 </td>

//                 {/* Approval Steps */}
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-2">
//                     {row.steps.map((step, j) => (
//                       <span
//                         key={j}
//                         className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
//                           ${step.approved
//                             ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
//                             : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
//                           }`}
//                       >
//                         {step.label}
//                       </span>
//                     ))}
//                   </div>
//                 </td>

//                 {/* Status */}
//                 <td className="px-6 py-4">
//                   <span className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
//                     ${statusStyles[row.status].badge}`}>
//                     {row.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Empty state */}
//         {filtered.length === 0 && (
//           <div className="text-center py-16 text-slate-400 dark:text-slate-600">
//             <p className="text-4xl mb-3">📭</p>
//             <p className="text-sm font-medium">No {activeFilter} leaves found</p>
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

import { useState } from "react"
import { leaves } from "../data/leaveData"

const filters = ["All", "Pending", "Approved", "Rejected"]

const statusStyles = {
  Pending:  "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
}

const filterStyles = {
  All:      "bg-slate-800 text-white",
  Pending:  "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-red-100 text-red-700",
}

export default function MyLeave() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = activeFilter === "All"
    ? leaves
    : leaves.filter((l) => l.status === activeFilter)

  return (
    <>
      {/* Page Title */}
      <h1 className="text-xl lg:text-2xl font-bold text-slate-800 transition-colors duration-300">
        My Leave History
      </h1>
      <p className="text-sm text-slate-400 mb-4 transition-colors duration-300">
        Track all your leave requests in one place
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap
              ${activeFilter === f
                ? filterStyles[f]
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── MOBILE CARD VIEW (shown below md) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 bg-white rounded-2xl">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm font-medium">No {activeFilter} leaves found</p>
          </div>
        ) : (
          filtered.map((row, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm transition-colors duration-300"
            >
              {/* Top row — type + status */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-slate-700">
                  {row.type}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[row.status]}`}>
                  {row.status}
                </span>
              </div>

              {/* Dates + Days */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500">
                  📅 {row.dates}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
                  {row.days} Days
                </span>
              </div>

              {/* Approval Steps */}
              <div>
                <p className="text-xs text-slate-400 mb-1.5 font-medium">
                  Approval Steps
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {row.steps.map((step, j) => (
                    <span
                      key={j}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full
                        ${step.approved
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                        }`}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── DESKTOP TABLE VIEW (shown on md+) ── */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-semibold text-slate-400 tracking-wider px-6 py-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={i}
                className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                  {row.type}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                  {row.dates}
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {row.days}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {row.steps.map((step, j) => (
                      <span
                        key={j}
                        className={`text-xs font-semibold px-3 py-1 rounded-full
                          ${step.approved
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                          }`}
                      >
                        {step.label}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-sm font-medium">No {activeFilter} leaves found</p>
          </div>
        )}
      </div>
    </>
  )
}