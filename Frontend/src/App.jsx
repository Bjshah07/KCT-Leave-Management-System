//import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import StatsCards from "./components/StatsCards"
import ApprovalBanner from "./components/ApprovalBanner"
import RecentRequests from "./components/RecentRequests"
import SignUp from './pages/SignUp'

export default function App() {
  //const [isDark, setIsDark] = useState(false)

  return (
    // <div className={`flex h-screen ${isDark ? "dark" : ""}`}>
    //   <div className="flex h-screen w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        
    //     <Sidebar />

    //     <div className="flex flex-col flex-1 overflow-hidden">
    //       <Header isDark={isDark} setIsDark={setIsDark} />

    //       <div className="flex-1 overflow-y-auto p-7">
    //         <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
    //           Welcome User!
    //         </h1>
    //         <p className="text-sm text-slate-400 dark:text-slate-500 mb-5">
    //           Your leave overview 2026
    //         </p>

    //         <StatsCards />
    //         <ApprovalBanner />
    //         <RecentRequests />
    //       </div>
    //     </div>

    //   </div>
    // </div>
    <>
    <SignUp/>
    </>
  )
}
