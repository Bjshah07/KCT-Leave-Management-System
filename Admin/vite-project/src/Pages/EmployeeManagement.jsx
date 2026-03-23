import React, { useState } from "react";
import { FiSearch, FiPlus, FiFilter, FiCheck ,FiEdit,FiTrash2} from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";


const employees = [
  // Production
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@containerco.com",
    id: "EMP001",
    dept: "Production",
    role: "Production Manager",
    annual: 15,
    sick: 8,
    initials: "SJ",
  },
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@containerco.com",
    id: "EMP002",
    dept: "Production",
    role: "Machine Operator",
    annual: 12,
    sick: 6,
    initials: "AM",
  },

  // Quality Control
  {
    name: "Michael Chen",
    email: "michael.chen@containerco.com",
    id: "EMP003",
    dept: "Quality Control",
    role: "QC Inspector",
    annual: 18,
    sick: 10,
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@containerco.com",
    id: "EMP004",
    dept: "Quality Control",
    role: "Quality Analyst",
    annual: 14,
    sick: 7,
    initials: "PS",
  },

  // HR
  {
    name: "Emily Rodriguez",
    email: "emily.rodriguez@containerco.com",
    id: "EMP005",
    dept: "HR",
    role: "HR Manager",
    annual: 12,
    sick: 7,
    initials: "ER",
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@containerco.com",
    id: "EMP006",
    dept: "HR",
    role: "Recruiter",
    annual: 10,
    sick: 5,
    initials: "RV",
  },

  // Logistics
  {
    name: "David Thompson",
    email: "david.thompson@containerco.com",
    id: "EMP007",
    dept: "Logistics",
    role: "Warehouse Supervisor",
    annual: 20,
    sick: 12,
    initials: "DT",
  },
  {
    name: "Neha Singh",
    email: "neha.singh@containerco.com",
    id: "EMP008",
    dept: "Logistics",
    role: "Inventory Manager",
    annual: 16,
    sick: 9,
    initials: "NS",
  },

  // Maintenance
  {
    name: "Rohit Patel",
    email: "rohit.patel@containerco.com",
    id: "EMP009",
    dept: "Maintenance",
    role: "Maintenance Engineer",
    annual: 14,
    sick: 6,
    initials: "RP",
  },
  {
    name: "Karan Gupta",
    email: "karan.gupta@containerco.com",
    id: "EMP010",
    dept: "Maintenance",
    role: "Technician",
    annual: 11,
    sick: 5,
    initials: "KG",
  },

  // Sales
  {
    name: "Anita Desai",
    email: "anita.desai@containerco.com",
    id: "EMP011",
    dept: "Sales",
    role: "Sales Manager",
    annual: 18,
    sick: 8,
    initials: "AD",
  },
  {
    name: "Vikram Rao",
    email: "vikram.rao@containerco.com",
    id: "EMP012",
    dept: "Sales",
    role: "Sales Executive",
    annual: 13,
    sick: 6,
    initials: "VR",
  },

  // Finance
  {
    name: "Sonal Kapoor",
    email: "sonal.kapoor@containerco.com",
    id: "EMP013",
    dept: "Finance",
    role: "Finance Manager",
    annual: 17,
    sick: 7,
    initials: "SK",
  },
  {
    name: "Amit Jain",
    email: "amit.jain@containerco.com",
    id: "EMP014",
    dept: "Finance",
    role: "Accountant",
    annual: 12,
    sick: 5,
    initials: "AJ",
  },

  // IT
  {
    name: "Riya Nair",
    email: "riya.nair@containerco.com",
    id: "EMP015",
    dept: "IT",
    role: "Software Engineer",
    annual: 20,
    sick: 10,
    initials: "RN",
  },
  {
    name: "Kunal Shah",
    email: "kunal.shah@containerco.com",
    id: "EMP016",
    dept: "IT",
    role: "System Administrator",
    annual: 15,
    sick: 7,
    initials: "KS",
  },
];

const departments = [
  "All Departments",
  "Production",
  "Quality Control",
  "HR",
  "Logistics",
  "Maintenance",
  "Sales",
  "Finance",
  "IT",
];

export default function EmployeeManagement() {
  const [open, setOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All Departments");

  //  Filter employees
  const filteredEmployees =
    selectedDept === "All Departments"
      ? employees
      : employees.filter((emp) => emp.dept === selectedDept);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Employee Management
          </h1>
          <p className="text-gray-500">
            Manage all employees and their information
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700">
          <FiPlus /> Add Employee
        </button>
      </div>

      {/* Search + Filter */}
      <div className="bg-white p-4 rounded-2xl shadow flex gap-4 items-center mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl flex-1">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, ID, or email..."
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/*  Dropdown Filter */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200"
          >
            <FiFilter />
            {selectedDept}
            <RiArrowDropDownLine className="text-2xl" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg  z-50">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedDept(dept);
                    setOpen(false);
                  }}
                  className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 rounded-xl mb-2 ${
                    selectedDept === dept ? "bg-gray-100 font-medium" : ""
                  }`}
                >
                  <span>{dept}</span>

                  {selectedDept === dept && (
                    <FiCheck className="text-gray-600" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow">
        {/* Header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-500/40">
          <div className="w-1 h-6 bg-blue-600 rounded"></div>
          <h2 className="font-semibold text-gray-800">
            All Employees ({filteredEmployees.length})
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-gray-500 text-sm border-b border-gray-500/40 ">
              <tr>
                <th className="p-4">Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Role</th>
                <th>Leave Balance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp, index) => (
                <tr
                  key={index}
                  className="group border-b border-gray-500/40 hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                      {emp.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{emp.name}</p>
                      <p className="text-sm text-gray-500">{emp.email}</p>
                    </div>
                  </td>

                  <td>{emp.id}</td>

                  <td>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {emp.dept}
                    </span>
                  </td>

                  <td className="text-gray-700">{emp.role}</td>

                  <td className="text-sm">
                    <div>Annual: {emp.annual}</div>
                    <div>Sick: {emp.sick}</div>
                  </td>

                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      active
                    </span>
                  </td>

                  {/* Action Buttons (show on hover) */}
                  <td className="p-2">
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition duration-200">
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200">
                        <FiEdit />
                      </button>

                      <button className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
