import React, { useState } from "react";

export default function UserRoles() {
  const [roles, setRoles] = useState({
    hr: {
      approve: true,
      reports: true,
      employees: true,
      holidays: true,
    },
    manager: {
      approve: true,
      reports: true,
      employees: false,
      holidays: false,
    },
    employee: {
      approve: false,
      reports: false,
      employees: false,
      holidays: false,
    },
  });

  const togglePermission = (role, key) => {
    setRoles((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [key]: !prev[role][key],
      },
    }));
  };

  return (
    <>
      <div className="w-full bg-white p-6 rounded-2xl  space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">User Roles</h2>
          <p className="text-gray-500">
            Define permissions for different user roles
          </p>
        </div>

        {/* Role Cards */}
        <div className="space-y-6">
          <RoleCard
            title="HR Admin"
            subtitle="Full system access"
            roleKey="hr"
            data={roles.hr}
            toggle={togglePermission}
          />

          <RoleCard
            title="Manager"
            subtitle="Department-level access"
            roleKey="manager"
            data={roles.manager}
            toggle={togglePermission}
          />

          <RoleCard
            title="Employee"
            subtitle="Basic user access"
            roleKey="employee"
            data={roles.employee}
            toggle={togglePermission}
          />
        </div>
      </div>
    </>
  );
}

/* Role Card */
function RoleCard({ title, subtitle, roleKey, data, toggle }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        <button className="px-4 py-1.5 text-sm border rounded-full hover:bg-gray-100">
          Edit
        </button>
      </div>

      {/* Permissions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Toggle
          label="Approve/Reject Leaves"
          enabled={data.approve}
          onToggle={() => toggle(roleKey, "approve")}
        />
        <Toggle
          label="Manage Employees"
          enabled={data.employees}
          onToggle={() => toggle(roleKey, "employees")}
        />
        <Toggle
          label="View Reports"
          enabled={data.reports}
          onToggle={() => toggle(roleKey, "reports")}
        />
        <Toggle
          label="Manage Holidays"
          enabled={data.holidays}
          onToggle={() => toggle(roleKey, "holidays")}
        />
      </div>
    </div>
  );
}

/* Toggle */
function Toggle({ label, enabled, onToggle }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow transform transition ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <span className="text-gray-800">{label}</span>
    </div>
  );
}
