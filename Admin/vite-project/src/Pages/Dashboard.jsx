import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Chart from "../Components/Chart";
import PieChartDept from "../Components/PieChartDept";
import RecentActivity from "../Components/RecentActivity";
import { FaUsers, FaFileAlt, FaClock, FaCheck } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 mb-8">
            Welcome back, Emily! Here's what's happening today.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card
              title="Total Employees"
              value="10"
              note="+2 this month"
              color="blue"
              icon={<FaUsers />}
            />
            <Card
              title="Total Leaves"
              value="8"
              note="This month"
              color="purple"
              icon={<FaFileAlt />}
            />
            <Card
              title="Pending Requests"
              value="3"
              note="Needs action"
              color="orange"
              icon={<FaClock />}
            />
            <Card
              title="Approved Leaves"
              value="4"
              note="This month"
              color="green"
              icon={<FaCheck />}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <Chart />

            {/* Pie Chart */}
            <PieChartDept />
          </div>
           <RecentActivity/>
        </div>
      </div>
    </div>
  );
}

/* Card Component */
function Card({ title, value, note, icon, color }) {
  const colors = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600",
  };

  const textColors = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    green: "text-green-500",
  };

  return (
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md flex justify-between items-center hover:shadow-lg transition">
      {/* Left */}
      <div>
        <p className="text-gray-600 font-medium mb-2">{title}</p>
        <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
        <p className={`text-sm mt-2 ${textColors[color]}`}>{note}</p>
      </div>

      {/* Icon */}
      <div
        className={`bg-linear-to-r ${colors[color]} text-white p-4 rounded-2xl text-xl shadow-md`}
      >
        {icon}
      </div>
    </div>
  );
}
