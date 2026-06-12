import axios from "axios";

const api = axios.create({
  baseURL: "https://kct-leave-management-system-backend.onrender.com/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchLeaveRequests() {
  const res = await api.get("/leave/requests");
  return res.data; // { leaves: [...] }
}

export async function approveLeaveRequest(requestId) {
  const res = await api.patch(`/leave/requests/${requestId}/approve`);
  return res.data;
}

export async function rejectLeaveRequest(requestId, payload = {}) {
  const res = await api.patch(`/leave/requests/${requestId}/reject`, payload);
  return res.data;
}

