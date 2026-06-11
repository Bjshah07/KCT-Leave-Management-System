export const fetchAdminNotifications = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("https://kct-leave-management-system-backend.onrender.com/api/notifications/admin", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.message || "Failed to fetch notifications");
  }

  return res.json();
};

export const markAdminNotificationsAsRead = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("https://kct-leave-management-system-backend.onrender.com/api/notifications/admin/mark-read", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.message || "Failed to mark notifications as read");
  }

  return res.json();
};

