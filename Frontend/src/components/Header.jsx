import { Search } from "lucide-react"

export default function Header({ isDark, setIsDark }) {
  return (
    <header className="flex items-center justify-between px-7 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-full px-5 py-2.5 w-72 transition-colors duration-300">
        <Search className="text-slate-400 dark:text-slate-500 w-4 h-4 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Toggle Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${isDark ? "bg-blue-600" : "bg-slate-200"}`}
        >
          <span
            className={`absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm transition-all duration-300
              ${isDark
                ? "translate-x-9 bg-slate-900"
                : "translate-x-1 bg-white"
              }`}
          >
            {isDark ? "🌙" : "☀️"}
          </span>
        </button>

        {/* Notification */}
        <button className="text-lg hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200">
          🔔
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-slate-200 dark:bg-slate-600" />

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="avatar"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-600"
          />
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-white leading-tight transition-colors duration-300">
              Jhon Deo
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              jhondeo123@gmail.com
            </p>
          </div>
          <span className="text-slate-400 dark:text-slate-500 text-xl ml-1">›</span>
        </div>

      </div>
    </header>
  )
}