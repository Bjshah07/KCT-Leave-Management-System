import { CheckCircle, Circle, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function ApprovalBanner({ status = "fresh" }) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const fetchLatestLeaveStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("https://kct-leave-management-system-backend.onrender.com/api/leave/my-leaves", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) return;

      const data = await response.json();
      const leaves = Array.isArray(data?.leaves) ? data.leaves : [];

      if (leaves.length === 0) {
        setCurrentStatus("fresh");
        return;
      }

      const latest = leaves[0]; // API sorts desc by createdAt
      // API returns status as: Pending | Approved | Rejected
      const latestStatus = latest?.status;

      if (latestStatus === "Approved") setCurrentStatus("approved");
      else if (latestStatus === "Rejected") setCurrentStatus("rejected");
      else setCurrentStatus("applied"); // Pending and any other values
    } catch {
      // best-effort: don't block UI
    }
  };

  useEffect(() => {
    // initial quick paint from localStorage (optional)
    const saved = localStorage.getItem("leaveStatus");
    if (saved) setCurrentStatus(saved);

    // then sync from backend so it changes when admin decides (even across browsers)
    fetchLatestLeaveStatus();

    // poll lightly so the banner updates after approve/reject
    const interval = setInterval(fetchLatestLeaveStatus, 8000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { steps, title, subtitle } = useMemo(() => {
    const isApproved = currentStatus === "approved";
    const isRejected = currentStatus === "rejected";
    const isApplied = currentStatus === "applied";
    const isFresh = currentStatus === "fresh";

    const baseSteps = [
      {
        label: "You Apply",
        color: "green",
        complete: !isFresh,
        icon: <CheckCircle className="w-5 h-5" />,
      },
      {
        label: "Manager",
        color: isRejected ? "red" : "amber",
        complete: isApproved || isRejected,
        icon: isRejected ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />,
      },
      {
        label: "Director",
        color: isRejected ? "red" : "amber",
        complete: isApproved || isRejected,
        icon: isRejected ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />,
      },
      {
        label: "Hr",
        color: isRejected ? "red" : "amber",
        complete: isApproved || isRejected,
        icon: isRejected ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />,
      },
      {
        label: isRejected ? "Rejected" : "Approved",
        color: isRejected ? "red" : "emerald",
        complete: isApproved || isRejected,
        icon: isRejected ? <XCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />,
      },
    ];

    const steps = baseSteps.map((step) => ({
      ...step,
      bg: step.complete ? `bg-${step.color}-300` : "bg-green-600",
      text: step.complete ? `text-${step.color}-400` : "text-slate-400",
      icon: step.complete ? step.icon : <Circle className="w-5 h-5" />,
    }));

    const title = isApproved
      ? "✅ Leave Approved"
      : isRejected
        ? "❌ Leave Rejected"
        : isApplied
          ? "📤 Request Submitted"
          : "3-Step Email Approval";

    const subtitle = isRejected
      ? "Your leave request has been rejected by the admin."
      : "When you apply – Director, Manager & HR – both must approve";

    return { steps, title, subtitle };
  }, [currentStatus]);

  return (
    <div className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 rounded-2xl p-4 lg:p-6 mb-6">
      <h2 className="text-white text-lg lg:text-xl font-bold mb-1">{title}</h2>
      <p className="text-blue-200 text-xs lg:text-sm mb-4 lg:mb-6">{subtitle}</p>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1 min-w-20">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div
                className={`w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-base lg:text-xl ${step.bg}`}
              >
                <span className={step.text}>{step.icon}</span>
              </div>
              <span className="text-blue-100 text-xs font-medium text-center">
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-white/20 mx-1 lg:mx-2 mb-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
