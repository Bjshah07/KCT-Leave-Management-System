import React, { useState } from "react";

export default function LeaveConfiguration() {
  const [carryForward, setCarryForward] = useState(true);
  const [requireReason, setRequireReason] = useState(true);
  const [autoApprove, setAutoApprove] = useState(false);

  return (
    <>
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800">
        Leave Configuration
      </h2>
      <p className="text-gray-500 mb-6">
        Configure default leave policies
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Annual Leave (days/year)
          </label>
          <input
            type="number"
            defaultValue={20}
            className="mt-2 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Sick Leave (days/year)
          </label>
          <input
            type="number"
            defaultValue={10}
            className="mt-2 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Casual Leave (days/year)
          </label>
          <input
            type="number"
            defaultValue={7}
            className="mt-2 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Toggles */}
      <ToggleRow
        title="Carry Forward Unused Leaves"
        description="Allow employees to carry forward unused leaves to next year"
        enabled={carryForward}
        setEnabled={setCarryForward}
      />

      <ToggleRow
        title="Require Reason for Leave"
        description="Make it mandatory to provide a reason for leave requests"
        enabled={requireReason}
        setEnabled={setRequireReason}
      />

      <ToggleRow
        title="Auto-approve Weekend Sandwiching"
        description="Automatically approve leaves between holidays and weekends"
        enabled={autoApprove}
        setEnabled={setAutoApprove}
      />
    </>
  );
}

function ToggleRow({ title, description, enabled, setEnabled }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-gray-800 font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
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
    </div>
  );
}