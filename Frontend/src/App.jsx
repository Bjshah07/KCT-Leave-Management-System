// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import PageNotFound from "./PageNotFound";

// export default function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import MyLeave from "./pages/MyLeave"
import ApplyLeave from "./pages/ApplyLeave"
import Settings from "./pages/Settings"

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex h-screen w-full bg-slate-100 overflow-hidden">

        {/* Overlay — shown on mobile when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-30 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
          <Sidebar setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Main */}
        <div className="flex flex-col flex-1 overflow-hidden w-full">
          <Header setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 overflow-y-auto p-4 lg:p-7">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-leave" element={<MyLeave />} />
              <Route path="/apply-leave" element={<ApplyLeave />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}