import React, { useState } from "react";
import EmailNotifications from "./EmailNotifications";
import AppNotifications from "./AppNotifications";

export default function NotificationsSettings() {
  const [emailSettings, setEmailSettings] = useState({
    newLeave: true,
    approvals: true,
    holidays: true,
    reports: false,
  });

  const [inAppSettings, setInAppSettings] = useState({
    push: true,
    sound: false,
  });

  const toggleEmail = (key) => {
    setEmailSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleInApp = (key) => {
    setInAppSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      <EmailNotifications settings={emailSettings} toggle={toggleEmail} />
      <AppNotifications settings={inAppSettings} toggle={toggleInApp} />
    </div>
  );
}