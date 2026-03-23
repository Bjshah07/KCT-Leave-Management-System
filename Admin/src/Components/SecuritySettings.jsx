import React, { useState } from "react";
import PasswordPolicy from "./PasswordPolicy";
import SessionManagement from "./SessionManagement";
import { FiSave } from "react-icons/fi";

export default function SecuritySettings() {
  const [minLength, setMinLength] = useState(8);

  const [settings, setSettings] = useState({
    specialChar: true,
    numbers: true,
    expiration: false,
  });

  const [timeout, setTimeoutValue] = useState(30);
  const [rememberMe, setRememberMe] = useState(true);

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <PasswordPolicy
          minLength={minLength}
          setMinLength={setMinLength}
          settings={settings}
          toggle={toggle}
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow p-6">
        <SessionManagement
          timeout={timeout}
          setTimeoutValue={setTimeoutValue}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      </div>

      <div className="flex justify-end mt-6">
        <button className="flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow">
          <FiSave />
          Save Security Settings
        </button>
      </div>
    </div>
  );
}
