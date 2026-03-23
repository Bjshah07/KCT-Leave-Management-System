import React from "react";

// Reusable Input Component
function Input({ label, defaultValue, className = "" }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-gray-700 block mb-2">
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default function GeneralSettings() {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Company Information
      </h2>
      <p className="text-gray-500 mb-6">Update your company details</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Input label="Company Name" defaultValue="ContainerCo Manufacturing" />
        <Input label="Company Email" defaultValue="admin@containerco.com" />
        <Input label="Phone Number" defaultValue="+1 (555) 123-4567" />

        <div className="lg:col-span-2">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Timezone
          </label>
          <select className="w-full bg-gray-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
            <option>Eastern Time (ET)</option>
            <option>India Standard Time (IST)</option>
            <option>Greenwich Mean Time (GMT)</option>
          </select>
        </div>

        <Input
          label="Address"
          defaultValue="123 Industrial Ave, Manufacturing District"
          className="lg:col-span-3"
        />
      </div>
    </>
  );
}