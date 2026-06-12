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

export async function fetchEmployees() {
  const res = await api.get("/employees");
  return res.data; // { employees: [...] }
}

export async function updateEmployee(employeeId, payload) {
  const res = await api.patch(`/employee-management/${employeeId}`, payload);
  return res.data;
}

export async function deleteEmployee(employeeId) {
  const res = await api.delete(`/employee-management/${employeeId}`);
  return res.data;
}

export async function createEmployee(payload) {
  const res = await api.post(`/employee-management/`, payload);
  return res.data;
}


