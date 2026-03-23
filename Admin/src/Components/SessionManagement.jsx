import React from "react";

export default function SessionManagement({
  timeout,
  setTimeoutValue,
  rememberMe,
  setRememberMe,
}) {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800">
        Session Management
      </h2>
      <p className="text-gray-500 mb-6">
        Configure user session settings
      </p>

      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700">
          Session Timeout (minutes)
        </label>
        <input
          type="number"
          value={timeout}
          onChange={(e) => setTimeoutValue(e.target.value)}
          className="mt-2 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
        />
      </div>

      <Divider />

      <div className="flex items-center justify-between py-4">
        <div>
          <h3 className="text-gray-800 font-medium">
            Remember Me Option
          </h3>
          <p className="text-gray-500 text-sm">
            Allow users to stay logged in for 30 days
          </p>
        </div>

        <Toggle
          enabled={rememberMe}
          onToggle={() => setRememberMe(!rememberMe)}
        />
      </div>
    </>
  );
}

/* Reusable */
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