// import { useState } from "react"
// import Sidebar from "../components/Sidebar.jsx"
// import Header from "../components/Header"
// import StatsCards from "../components/StatsCards"
// import ApprovalBanner from "../components/ApprovalBanner"
// import RecentRequests from "../components/RecentRequests"

// const Dashboard = () => {
//     return (
//         <div className="flex h-screen">
//             <div className="flex h-screen w-full bg-slate-100">
//                 <Sidebar />
//                 <div className="flex flex-col flex-1 overflow-hidden">
//                     <Header />
//                     <div className="flex-1 overflow-y-auto p-7">
//                         <h1 className="text-2xl font-bold text-slate-800">
//                             Welcome User!
//                         </h1>
//                         <p className="text-sm text-slate-400 mb-5">
//                             Your leave overview 2026
//                         </p>
//                         <StatsCards />
//                         <ApprovalBanner />
//                         <RecentRequests />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard

import StatsCards from "../components/StatsCards"
import ApprovalBanner from "../components/ApprovalBanner"
import RecentRequests from "../components/RecentRequests"

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-800 transition-colors duration-300">
        Welcome User!
      </h1>
      <p className="text-sm text-slate-400 mb-5 transition-colors duration-300">
        Your leave overview 2026
      </p>
      <StatsCards />
      <ApprovalBanner />
      <RecentRequests />
    </>
  )
}
