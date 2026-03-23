import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import EmployeeManagement from "./Pages/EmployeeManagement";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import LeaveRequests from "./Pages/LeaveRequests";
import LeaveBalance from "./Pages/LeaveBalance";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <Sidebar />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeManagement />} />
              <Route path="/leaves" element={<LeaveRequests />} />
              <Route path="/balance" element={<LeaveBalance />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
