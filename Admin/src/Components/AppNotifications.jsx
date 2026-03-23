import React from "react";

export default function AppNotifications({ settings, toggle }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-800">
        In-App Notifications
      </h2>
      <p className="text-gray-500 mb-6">
        Configure in-app notification preferences
      </p>

      <ToggleRow
        title="Push Notifications"
        desc="Show notifications in the browser"
        enabled={settings.push}
        onToggle={() => toggle("push")}
      />

      <Divider />

      <ToggleRow
        title="Sound Alerts"
        desc="Play a sound for new notifications"
        enabled={settings.sound}
        onToggle={() => toggle("sound")}
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