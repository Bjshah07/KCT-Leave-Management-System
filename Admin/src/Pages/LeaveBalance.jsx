import React, { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchLeaveBalances } from "../api/leaveBalanceAdminApi";

export default function LeaveBalance() {
  const [query, setQuery] = useState("");
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchLeaveBalances();
        if (!mounted) return;
        setBalances(Array.isArray(data?.balances) ? data.balances : []);
      } catch (e) {
        console.error(e);
        if (!mounted) return;
        setError(e?.response?.data?.message || "Failed to load leave balances");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return balances;
    return balances.filter((b) => {
      const name = (b.name || "").toLowerCase();
      const id = (b.id || "").toLowerCase();
      const dept = (b.dept || "").toLowerCase();
      return name.includes(q) || id.includes(q) || dept.includes(q);
    });
  }, [balances, query]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Leave Balance</h1>
      <p className="text-gray-500 mb-6">Manage employee leave balances</p>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, ID, or department..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="p-4 font-semibold text-gray-700">
          All Employee Leave Balances ({filtered.length})
        </div>

        {loading ? (
          <div className="p-6 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="p-6 text-red-600">{error}</div>
        ) : (
          <table className="w-full text-left">
            <thead className="text-gray-500 text-sm border-b border-gray-500/40">
              <tr>
                <th className="p-4">Employee</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Annual Leave</th>
                <th>Sick Leave</th>
                <th>Casual Leave</th>
                <th>Unpaid Leave</th>
                <th>Total Balance</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((emp, index) => {
                const total = Number(emp.total ?? 0);
                const initials = (emp.name || "")
                  .split(" ")
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join("");

                return (
                  <tr
                    key={emp.id || index}
                    className="border-b border-gray-500/40 hover:bg-gray-50 transition group"
                  >
                    {/* Employee */}
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
                        {initials}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{emp.name}</p>
                        <p className="text-sm text-gray-500">{emp.dept}</p>
                      </div>
                    </td>

                    <td>{emp.id}</td>
                    <td>{emp.dept}</td>

                    {/* Leaves */}
                    <td>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {emp.annual} days
                      </span>
                    </td>

                    <td>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {emp.sick} days
                      </span>
                    </td>
                    <td>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {emp.casual} days
                      </span>
                    </td>
                    <td>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {emp.unpaid} days
                      </span>
                    </td>



                    {/* Total */}
                    <td>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                        {total} days
                      </span>
                    </td>
                  </tr>
                );
              })}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-gray-500">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

