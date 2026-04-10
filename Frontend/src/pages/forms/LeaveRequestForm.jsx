import { ChevronDown, Upload } from "lucide-react";

export default function LeaveRequestForm({ 
  form, 
  errors, 
  handleChange, 
  handleFileChange, 
  dragOver, 
  setDragOver,
  showDropdown, 
  setShowDropdown,
  validateLeaveType 
}) {
  return (
    <>
      {/* Leave Type Dropdown */}
      <div className="relative">
        <label className="block text-xs font-semibold text-blue-600 mb-2">
          Leave Type <span className="text-red-500">*</span>
        </label>
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className={`w-full p-4 pr-10 rounded-xl border-2 text-sm transition-all duration-200 flex items-center justify-between ${form.leaveType
              ? "border-blue-400 bg-blue-50 text-slate-800"
              : "border-slate-200 hover:border-slate-300"
            }`}
        >
          <span>{form.leaveType || "Select leave type"}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${showDropdown ? "rotate-180" : ""}`}
          />
        </button>
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-20 max-h-60 overflow-auto">
{["Annual Leave", "Sick Leave", "Casual Leave", "Unpaid Leave"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  validateLeaveType(type);
                  setShowDropdown(false);
                }}
                className={`w-full text-left p-3 text-sm hover:bg-blue-50 ${form.leaveType === type
                    ? "bg-blue-100 font-semibold"
                    : ""
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
        {errors.leaveType && (
          <p className="text-red-500 text-xs mt-1">
            {errors.leaveType}
          </p>
        )}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border-2 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.startDate
                ? "border-red-300"
                : "border-slate-200 hover:border-slate-300"
              }`}
          />
          {errors.startDate && (
            <p className="text-red-500 text-xs mt-1">
              {errors.startDate}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className={`w-full p-4 rounded-xl border-2 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.endDate
                ? "border-red-300"
                : "border-slate-200 hover:border-slate-300"
              }`}
          />
          {errors.endDate && (
            <p className="text-red-500 text-xs mt-1">
              {errors.endDate}
            </p>
          )}
        </div>
      </div>

      {/* Reason */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Reason <span className="text-red-500">*</span>
        </label>
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          rows={4}
          placeholder="Provide detailed reason for your leave request..."
          className={`w-full p-4 rounded-xl border-2 resize-vertical text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.reason
              ? "border-red-300"
              : "border-slate-200 hover:border-slate-300"
            }`}
        />
        {errors.reason && (
          <p className="text-red-500 text-xs mt-1">{errors.reason}</p>
        )}
      </div>

      {/* Document Upload */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Supporting Document (Optional)
        </label>
        <div
          className={`p-8 border-2 border-dashed rounded-xl text-center transition-all duration-200 cursor-pointer flex flex-col items-center gap-3 ${dragOver
              ? "border-blue-400 bg-blue-25"
              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file) handleFileChange({ target: { files: [file] } });
          }}
          onClick={() => document.getElementById("leaveRequestFileInput").click()}
        >
          <Upload className="w-8 h-8 text-slate-400" />
          {form.document ? (
            <p className="text-sm font-semibold text-emerald-600">
              {form.document.name}
            </p>
          ) : (
            <>
              <p className="text-sm text-slate-600 font-medium">
                Click to upload or drag & drop
              </p>
              <p className="text-xs text-slate-400">
                PDF, JPG, PNG (Max 5MB)
              </p>
            </>
          )}
        </div>
        <input
          id="leaveRequestFileInput"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </>
  );
}
