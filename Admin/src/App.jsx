import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import EmployeeManagement from "./Pages/EmployeeManagement";
import EditEmployee from "./Pages/EditEmployee";

import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import LeaveRequests from "./Pages/LeaveRequests";
import LeaveBalance from "./Pages/LeaveBalance";
import Settings from "./Pages/Settings";
import AdminLogin from "./Pages/AdminLogin";
import ProtectedRoute from "./Components/ProtectedRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
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
                      <Route index element={<Dashboard />} />
                      <Route path="employees" element={<EmployeeManagement />} />
                      <Route path="employees/edit" element={<EditEmployee />} />

                      <Route path="leaves" element={<LeaveRequests />} />
                      <Route path="balance" element={<LeaveBalance />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

