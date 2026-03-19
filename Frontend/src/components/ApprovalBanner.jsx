// import { Smartphone } from 'lucide-react';

// const steps = [
//   { label: "You Apply", icon: <Smartphone />,  border: "none", bg: "bg-blue-950/60", text: "text-yellow-300" },
//   { label: "Manager", icon: <Smartphone />, bg: "bg-blue-950/60",  text: "text-blue-500"},
//   { label: "Director", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-red-500" },
//   { label: "Hr", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-purple-500" },
//   { label: "Approved", icon: <Smartphone />,  bg: "bg-blue-950/60", text: "text-emerald-400" },
// ]

// export default function ApprovalBanner() {
//   return (
//     <div className="bg-linear-to-r from-blue-900 via-blue-700 to-blue-600 rounded-2xl p-6 mb-6 transition-colors duration-300">

//       {/* Title */}
//       <h2 className="text-white text-xl font-bold mb-1">
//         3- Step Email Approval
//       </h2>
//       <p className="text-blue-200 text-sm mb-6">
//         When you apply – Director, Manager & HR – both must approve
//       </p>

//       {/* Steps */}
//       <div className="flex items-center justify-between">
//         {steps.map((step, i) => (
//           <div key={i} className="flex items-center flex-1">

//             {/* Step circle + label */}
//             <div className="flex flex-col items-center gap-2">
//               <div className={`w-11 h-11 rounded-full border flex items-center justify-center text-xl transition-colors duration-300
//                  ${step.bg} ${step.border}`}>
//                  <span className={step.text}>{step.icon}</span>
//               </div>
//               <span className="text-blue-100 text-xs font-medium transition-colors duration-300">
//                 {step.label}
//               </span>
//             </div>

//             {/* Connector line */}
//             {i < steps.length - 1 && (
//               <div className="flex-1 h-0.5 bg-white/20 mx-2 mb-5 transition-colors duration-300" />
//             )}

//           </div>
//         ))}
//       </div>

//     </div>
//   )
// }

import { Smartphone } from 'lucide-react';

const steps = [
  { label: "You Apply", icon: <Smartphone />, bg: "bg-violet-500/20", text: "text-violet-300" },
  { label: "Manager",   icon: <Smartphone />, bg: "bg-blue-500/20",   text: "text-blue-300"   },
  { label: "Director",  icon: <Smartphone />,  bg: "bg-pink-500/20",   text: "text-pink-300"   },
  { label: "Hr",        icon: <Smartphone />, bg: "bg-amber-500/20",  text: "text-amber-300"  },
  { label: "Approved",  icon: <Smartphone />,  bg: "bg-emerald-500/20",text: "text-emerald-300"},
]

export default function ApprovalBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-2xl p-4 lg:p-6 mb-6">

      <h2 className="text-white text-lg lg:text-xl font-bold mb-1">
        3- Step Email Approval
      </h2>
      <p className="text-blue-200 text-xs lg:text-sm mb-4 lg:mb-6">
        When you apply – Director, Manager & HR – both must approve
      </p>

      {/* Steps — wraps on mobile */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center flex-1 min-w-[80px]">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div className={`w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-base lg:text-xl ${step.bg}`}>
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
  )
}