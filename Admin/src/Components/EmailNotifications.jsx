import React from "react";

export default function EmailNotifications({ settings, toggle }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        Email Notifications
      </h2>
      <p className="text-gray-500 mb-6">
        Manage when you receive email notifications
      </p>

      <ToggleRow
        title="New Leave Requests"
        desc="Receive emails when employees submit new leave requests"
        enabled={settings.newLeave}
        onToggle={() => toggle("newLeave")}
      />

      <Divider />

      <ToggleRow
        title="Leave Approvals/Rejections"
        desc="Get notified when leave requests are approved or rejected"
        enabled={settings.approvals}
        onToggle={() => toggle("approvals")}
      />

      <Divider />

      <ToggleRow
        title="Upcoming Holidays"
        desc="Reminders for upcoming company holidays"
        enabled={settings.holidays}
        onToggle={() => toggle("holidays")}
      />

      <Divider />

      <ToggleRow
        title="Monthly Reports"
        desc="Receive monthly leave analytics reports"
        enabled={settings.reports}
        onToggle={() => toggle("reports")}
      />
    </div>
  );
}

/* Reusable */
function ToggleRow({ title, desc, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h3 className="text-gray-800 font-medium">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>

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
    </div>
  );
}

function Divider() {
  return <div className="border-t border-gray-200/50 my-2"></div>;
}