import { Smartphone } from 'lucide-react';

const steps = [
  { label: "You Apply", icon: <Smartphone />,  border: "none", bg: "bg-blue-950/60", text: "text-yellow-300" },
  { label: "Manager", icon: <Smartphone />, bg: "bg-blue-950/60",  text: "text-blue-500"},
  { label: "Director", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-red-500" },
  { label: "Hr", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-purple-500" },
  { label: "Approved", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-emerald-400" },
]

export default function ApprovalBanner() {
  return (
    <div className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 rounded-2xl p-6 mb-6 transition-colors duration-300">

      {/* Title */}
      <h2 className="text-white text-xl font-bold mb-1">
        3- Step Email Approval
      </h2>
      <p className="text-blue-200 text-sm mb-6">
        When you apply – Director, Manager & HR – both must approve
      </p>

      {/* Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1">

            {/* Step circle + label */}
            <div className="flex flex-col items-center gap-2">
              <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-xl transition-colors duration-300
                 ${step.bg} ${step.border}`}>
                 <span className={step.text}>{step.icon}</span>
              </div>
              <span className="text-blue-100 text-xs font-medium transition-colors duration-300">
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-white/20 mx-2 mb-5 transition-colors duration-300" />
            )}

          </div>
        ))}
      </div>

    </div>
  )
}