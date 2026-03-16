const requests = [
  {
    type: "Annual Leave",
    dates: "10 JUL 2025 - 15 JUL 2025",
    days: 5,
    steps: [
      { label: "Director", approved: false },
      { label: "Manager", approved: false },
      { label: "Hr", approved: false },
    ],
    final: "Pending",
  },
  {
    type: "Annual Leave",
    dates: "10 JUL 2025 - 15 JUL 2025",
    days: 5,
    steps: [
      { label: "Director", approved: true },
      { label: "Manager", approved: true },
      { label: "Hr", approved: true },
    ],
    final: "Pending",
  },
]

export default function RecentRequests() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm transition-colors duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-800 dark:text-white transition-colors duration-300">
          My Recent Request
        </h3>
        <button className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
          View All
        </button>
      </div>

      {/* Table */}
      <table className="w-full">

        {/* Table Head */}
        <thead>
          <tr className="border-b border-slate-100 dark:border-slate-700 transition-colors duration-300">
            {["TYPE", "DATES", "DAYS", "APPROVAL STEPS", "FINAL"].map((h) => (
              <th
                key={h}
                className="text-left text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider pb-3 px-2 transition-colors duration-300"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {requests.map((req, i) => (
            <tr
              key={i}
              className="border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {/* Type */}
              <td className="py-4 px-2 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">
                {req.type}
              </td>

              {/* Dates */}
              <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                {req.dates}
              </td>

              {/* Days */}
              <td className="py-4 px-2 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                {req.days}
              </td>

              {/* Approval Steps */}
              <td className="py-4 px-2">
                <div className="flex items-center gap-2">
                  {req.steps.map((step, j) => (
                    <span
                      key={j}
                      className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300
                        ${step.approved
                          ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                          : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                        }`}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>
              </td>

              {/* Final */}
              <td className="py-4 px-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 transition-colors duration-300">
                  {req.final}
                </span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}