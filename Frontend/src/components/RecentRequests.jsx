// const requests = [
//   {
//     type: "Annual Leave",
//     dates: "10 JUL 2025 - 15 JUL 2025",
//     days: 5,
//     steps: [
//       { label: "Director", approved: false },
//       { label: "Manager", approved: false },
//       { label: "Hr", approved: false },
//     ],
//     final: "Pending",
//   },
//   {
//     type: "Annual Leave",
//     dates: "10 JUL 2025 - 15 JUL 2025",
//     days: 5,
//     steps: [
//       { label: "Director", approved: true },
//       { label: "Manager", approved: true },
//       { label: "Hr", approved: true },
//     ],
//     final: "Pending",
//   },
// ]

// export default function RecentRequests() {
//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-sm transition-colors duration-300">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">
//         <h3 className="text-base font-bold text-slate-800 transition-colors duration-300">
//           My Recent Request
//         </h3>
//         <button className="text-sm font-semibold text-blue-600 hover:underline transition-colors duration-200">
//           View All
//         </button>
//       </div>

//       {/* Table */}
//       <table className="w-full">

//         {/* Table Head */}
//         <thead>
//           <tr className="border-b border-slate-100 transition-colors duration-300">
//             {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "FINAL"].map((h) => (
//               <th
//                 key={h}
//                 className="text-left text-xs font-semibold text-slate-400 tracking-wider pb-3 px-2 transition-colors duration-300"
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         {/* Table Body */}
//         <tbody>
//           {requests.map((req, i) => (
//             <tr
//               key={i}
//               className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-200"
//             >
//               {/* Type */}
//               <td className="py-4 px-2 text-sm font-semibold text-slate-700 transition-colors duration-300">
//                 {req.type}
//               </td>

//               {/* Dates */}
//               <td className="py-4 px-2 text-sm text-slate-500 transition-colors duration-300">
//                 {req.dates}
//               </td>

//               {/* Days */}
//               <td className="py-4 px-2 text-sm text-slate-500 transition-colors duration-300">
//                 {req.days}
//               </td>

//               {/* Approval Steps */}
//               <td className="py-4 px-2">
//                 <div className="flex items-center gap-2">
//                   {req.steps.map((step, j) => (
//                     <span
//                       key={j}
//                       className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
//                         ${step.approved
//                           ? "bg-emerald-100 text-emerald-700 "
//                           : "bg-amber-100 text-amber-700 "
//                         }`}
//                     >
//                       {step.label}
//                     </span>
//                   ))}
//                 </div>
//               </td>

//               {/* Final */}
//               <td className="py-4 px-2">
//                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700 transition-colors duration-300">
//                   {req.final}
//                 </span>
//               </td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

import { useNavigate } from "react-router-dom"
import { leaves } from "../data/leaveData"

export default function RecentRequests() {
  const navigate = useNavigate()
  const recentLeaves = leaves.slice(0, 2)

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-800">
          My Recent Request
        </h3>
        <button
          onClick={() => navigate("/my-leave")}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          View All
        </button>
      </div>

      {/* Scrollable table on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-100">
              {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "STATUS"].map((h) => (
                <th key={h} className="text-left text-xs font-semibold text-slate-400 tracking-wider pb-3 px-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentLeaves.map((req, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-200">
                <td className="py-4 px-2 text-sm font-semibold text-slate-700">{req.type}</td>
                <td className="py-4 px-2 text-sm text-slate-500 whitespace-nowrap">{req.dates}</td>
                <td className="py-4 px-2 text-sm text-slate-500">{req.days}</td>
                <td className="py-4 px-2">
                  <div className="flex flex-wrap items-center gap-1">
                    {req.steps.map((step, j) => (
                      <span key={j} className={`text-xs font-semibold px-2 py-1 rounded-full
                        ${step.approved
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                        }`}>
                        {step.label}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full
                    ${req.status === "Approved" ? "bg-emerald-100 text-emerald-700"
                    : req.status === "Rejected" ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"}`}>
                    {req.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}