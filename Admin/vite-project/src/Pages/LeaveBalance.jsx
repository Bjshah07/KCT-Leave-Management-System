import React from "react";
import { FiSearch, FiEdit } from "react-icons/fi";

const employees = [
  {
    id: "EMP001",
    name: "Sarah Johnson",
    role: "Production Manager",
    dept: "Production",
    annual: 15,
    sick: 8,
    casual: 5,
  },
  {
    id: "EMP002",
    name: "Michael Chen",
    role: "QC Inspector",
    dept: "Quality Control",
    annual: 18,
    sick: 10,
    casual: 6,
  },
  {
    id: "EMP003",
    name: "Emily Rodriguez",
    role: "HR Manager",
    dept: "HR",
    annual: 12,
    sick: 7,
    casual: 4,
  },
  {
    id: "EMP004",
    name: "David Thompson",
    role: "Warehouse Supervisor",
    dept: "Logistics",
    annual: 20,
    sick: 12,
    casual: 7,
  },
  {
    id: "EMP005",
    name: "Lisa Anderson",
    role: "Assembly Line Worker",
    dept: "Production",
    annual: 10,
    sick: 5,
    casual: 3,
  },
  {
    id: "EMP006",
    name: "James Wilson",
    role: "Maintenance Engineer",
    dept: "Maintenance",
    annual: 14,
    sick: 6,
    casual: 4,
  },
  {
    id: "EMP007",
    name: "Sophia Martinez",
    role: "HR Executive",
    dept: "HR",
    annual: 12,
    sick: 7,
    casual: 5,
  },
  {
    id: "EMP008",
    name: "Daniel Brown",
    role: "Quality Analyst",
    dept: "Quality Control",
    annual: 16,
    sick: 9,
    casual: 6,
  },
  {
    id: "EMP009",
    name: "Olivia Taylor",
    role: "Logistics Coordinator",
    dept: "Logistics",
    annual: 11,
    sick: 5,
    casual: 3,
  },
  {
    id: "EMP010",
    name: "Ethan Clark",
    role: "Production Supervisor",
    dept: "Production",
    annual: 18,
    sick: 10,
    casual: 7,
  },
];

export default function LeaveBalance() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Leave Balance</h1>
      <p className="text-gray-500 mb-6">Manage employee leave balances</p>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, ID, or department..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="p-4 font-semibold text-gray-700">
          All Employee Leave Balances (10)
        </div>

        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b border-gray-500/40">
            <tr>
              <th className="p-4">Employee</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Annual Leave</th>
              <th>Sick Leave</th>
              <th>Casual Leave</th>
              <th>Total Balance</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => {
              const total = emp.annual + emp.sick + emp.casual;
              const initials = emp.name
                .split(" ")
                .map((n) => n[0])
                .join("");

              return (
                <tr
                  key={index}
                  className="border-b border-gray-500/40 hover:bg-gray-50 transition group"
                >
                  {/* Employee */}
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                      {initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{emp.name}</p>
                      <p className="text-sm text-gray-500">{emp.role}</p>
                    </div>
                  </td>

                  <td>{emp.id}</td>
                  <td>{emp.dept}</td>

                  {/* Leaves */}
                  <td>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {emp.annual} days
                    </span>
                  </td>

                  <td>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {emp.sick} days
                    </span>
                  </td>

                  <td>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {emp.casual} days
                    </span>
                  </td>

                  {/* Total */}
                  <td>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {total} days
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                      <FiEdit />
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
