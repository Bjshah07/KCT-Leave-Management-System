import { UserRound } from 'lucide-react';

export default function StatsCards({ stats = [] }) {
  const statConfigs = [
    { key: 'Annual Leave', label: "Annual Leave Left", color: "text-blue-500", border: "border-t-blue-500" },
    { key: 'Sick Leave', label: "Sick Leave Left", color: "text-amber-500", border: "border-t-amber-500" },
    { label: "Approved", color: "text-emerald-500", border: "border-t-emerald-500" },
    { label: "In Progress", color: "text-red-500", border: "border-t-red-500" }
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
      {statConfigs.map((config, i) => {
        let count = 0;
        let sub = '';

        if (config.key) {
          const stat = stats.balances?.find(s => s.type === config.key) || {};
          count = stat.left || 0;
          sub = `${stat.used || 0} used of ${stat.total || 10}`;
        } else {
          count = config.label === "Approved" ? stats.approved || 0 : stats.pending || 0;
          sub = config.label === "Approved" ? "Fully Confirmed" : "Awaiting approval";
        }

        return (
          <div key={i} className={`bg-white rounded-xl p-4 lg:p-5 shadow-sm border-t-4 ${config.border}`}>
            <div className={`text-xl lg:text-2xl mb-2 ${config.color}`}>
              <UserRound />
            </div>
            <div className="flex items-baseline gap-1 lg:gap-2 flex-wrap">
              <span className="text-2xl lg:text-3xl font-bold text-slate-800">
                {count}
              </span>
              <span className="text-xs lg:text-sm font-semibold text-slate-700">
                {config.label}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">{sub}</p>
          </div>
        )
      })}
    </div>
  )
}
