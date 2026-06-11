import axios from "axios";

const api = axios.create({
  baseURL: "https://kct-leave-management-system-backend.onrender.com/api",
  withCredentials: true,
});

// Admin: get all employee leave balances.
// Note: backend currently does not implement this route; it will be added
// as part of this change.
export async function fetchLeaveBalances() {
  const res = await api.get("/leave/balances");
  return res.data; // { balances: [...] }
}

