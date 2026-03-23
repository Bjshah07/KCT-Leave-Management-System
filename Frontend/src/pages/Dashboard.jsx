import StatsCards from "../components/StatsCards"
import ApprovalBanner from "../components/ApprovalBanner"
import RecentRequests from "../components/RecentRequests"

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold text-slate-800 transition-colors duration-300">
        Welcome User!
      </h1>
      <p className="text-sm text-slate-400 mb-5 transition-colors duration-300">
        Your leave overview 2026
      </p>
      <StatsCards />
      <ApprovalBanner />
      <RecentRequests />
    </>
  )
}
