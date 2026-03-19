// export default function LogoutModal({ onCancel, onConfirm }) {
//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

//       {/* Modal Box */}
//       <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 w-full max-w-sm shadow-2xl transition-colors duration-300">

//         {/* Animated Icon */}
//         <div className="flex justify-center mb-5">
//           <div className="relative w-20 h-20">

//             {/* Spinning outer ring */}
//             <svg
//               className="absolute inset-0 w-full h-full animate-spin"
//               style={{ animationDuration: "3s" }}
//               viewBox="0 0 80 80"
//               fill="none"
//             >
//               <circle
//                 cx="40"
//                 cy="40"
//                 r="36"
//                 stroke="#3b82f6"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 strokeDasharray="180 50"
//               />
//             </svg>

//             {/* Static inner circle + icon */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-14 h-14 rounded-full border-4 border-blue-100 dark:border-slate-700 flex items-center justify-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="w-7 h-7 text-blue-500"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//                   <polyline points="16 17 21 12 16 7" />
//                   <line x1="21" y1="12" x2="9" y2="12" />
//                 </svg>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Message */}
//         <p className="text-center text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed mb-7 transition-colors duration-300">
//           Are you sure you want to logout? You will need to
//           login again to access your account.
//         </p>

//         {/* Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={onCancel}
//             className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onConfirm}
//             className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors duration-200"
//           >
//             Logout
//           </button>
//         </div>

//       </div>
//     </div>
//   )
// }

import { createPortal } from "react-dom"

export default function LogoutModal({ onCancel, onConfirm }) {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

      {/* Modal Box */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 w-full max-w-sm shadow-2xl transition-colors duration-300">

        {/* Animated Icon */}
        <div className="flex justify-center mb-5">
          <div className="relative w-20 h-20">

            {/* Spinning outer ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin"
              style={{ animationDuration: "3s" }}
              viewBox="0 0 80 80"
              fill="none"
            >
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="180 50"
              />
            </svg>

            {/* Static inner circle + icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full border-4 border-blue-100 dark:border-slate-700 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-blue-500"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Message */}
        <p className="text-center text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed mb-7 transition-colors duration-300">
          Are you sure you want to logout? You will need to
          login again to access your account.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors duration-200"
          >
            Logout
          </button>
        </div>

      </div>
    </div>,
    document.body  // ← teleports modal outside sidebar into body
  )
}
