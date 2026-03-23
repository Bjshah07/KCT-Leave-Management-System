import React from "react";

export default function PasswordPolicy({
  minLength,
  setMinLength,
  settings,
  toggle,
}) {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800">
        Password Policy
      </h2>
      <p className="text-gray-500 mb-6">
        Configure password requirements
      </p>

      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700">
          Minimum Password Length
        </label>
        <input
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(e.target.value)}
          className="mt-2 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
        />
      </div>

      <Divider />

      <ToggleRow
        title="Require Special Characters"
        desc="Passwords must contain at least one special character"
        enabled={settings.specialChar}
        onToggle={() => toggle("specialChar")}
      />

      <Divider />

      <ToggleRow
        title="Require Numbers"
        desc="Passwords must contain at least one number"
        enabled={settings.numbers}
        onToggle={() => toggle("numbers")}
      />

      <Divider />

      <ToggleRow
        title="Password Expiration"
        desc="Require users to change passwords every 90 days"
        enabled={settings.expiration}
        onToggle={() => toggle("expiration")}
      />
    </>
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
      <Toggle enabled={enabled} onToggle={onToggle} />
    </div>
  );
}

function Toggle({ enabled, onToggle }) {
  return (
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
  );
}

function Divider() {
  return <div className="border-t border-gray-200"></div>;
}