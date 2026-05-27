import React, { useEffect, useMemo, useState } from "react";
import { FiSearch, FiPlus, FiFilter, FiCheck, FiEdit, FiTrash2 } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { deleteEmployee, fetchEmployees } from "../api/adminApi";
import { useNavigate } from "react-router-dom";




export default function EmployeeManagement() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchEmployees();
        setEmployees(data?.employees || []);
      } catch (e) {
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const departments = useMemo(() => {
    const depts = Array.from(new Set(employees.map((e) => e.dept).filter(Boolean)));
    return ["All Departments", ...depts];
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    const byDept =
      selectedDept === "All Departments"
        ? employees
        : employees.filter((emp) => emp.dept === selectedDept);

    const q = searchTerm.trim().toLowerCase();
    if (!q) return byDept;

    return byDept.filter((emp) => {
      return (
        (emp.name || "").toLowerCase().includes(q) ||
        (emp.email || "").toLowerCase().includes(q) ||
        (String(emp.id) || "").toLowerCase().includes(q)
      );
    });
  }, [employees, selectedDept, searchTerm]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Employee Management</h1>
          <p className="text-gray-500">Manage all employees and their information</p>
        </div>

        {/* <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700">
          <FiPlus /> Add Employee
        </button> */}
      </div>

      {/* Search + Filter */}
      <div className="bg-white p-4 rounded-2xl shadow flex gap-4 items-center mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl flex-1">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, ID, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full"
          />
        </div>

        {/* Dropdown Filter */}
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
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg z-50">
              {departments.map((dept) => (
                <div
                  key={dept}
                  onClick={() => {
                    setSelectedDept(dept);
                    setOpen(false);
                  }}
                  className={`flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 rounded-xl mb-2 ${selectedDept === dept ? "bg-gray-100 font-medium" : ""
                    }`}
                >
                  <span>{dept}</span>
                  {selectedDept === dept && <FiCheck className="text-gray-600" />}
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
          <h2 className="font-semibold text-gray-800">All Employees ({filteredEmployees.length})</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-gray-500 text-sm border-b border-gray-500/40">
              <tr>
                <th className="p-4">Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                {/* <th>Role</th> */}
                <th>Leave Balance</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    Loading employees...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-red-600">
                    {error}
                  </td>
                </tr>
              ) : filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    No employees found.
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp) => (
                  <tr
                    key={emp.id}
                    className="group border-b border-gray-500/40 hover:bg-gray-50 transition"
                  >
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                        {emp.avatar ? (
                          <img
                            src={emp.avatar}
                            alt={emp.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          emp.initials
                        )}
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

                    {/* <td className="text-gray-700">{emp.role}</td> */}

                    <td className="text-sm">
                      <div>Annual: {emp.annual}</div>
                      <div>Sick: {emp.sick}</div>
                    </td>

                    <td>
                      <span className="px-3 py-1 rounded-full text-md">
                        {emp.phoneNumber}
                      </span>
                    </td>

                    {/* Action Buttons (show on hover) */}
                    <td className="p-2">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          className="p-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200"
                          onClick={() => {
                            navigate(`/employees/edit?id=${encodeURIComponent(emp.id)}`);
                          }}
                        >
                          <FiEdit />
                        </button>

                        <button
                          type="button"
                          className="p-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200"
                          onClick={async () => {
                            const ok = window.confirm(`Delete employee: ${emp.name}?`);
                            if (!ok) return;

                            await deleteEmployee(emp.id);
                            setEmployees((prev) => prev.filter((x) => x.id !== emp.id));
                          }}
                        >
                          <FiTrash2 />
                        </button>

                      </div>

                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

