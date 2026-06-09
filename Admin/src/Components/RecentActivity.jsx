import React from "react";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const getStyles = (type) => {
  switch (type) {
    case "approved":
      return {
        bg: "bg-green-500",
        text: "text-green-600",
        label: "approval",
        icon: <FaCheckCircle />,
      };
    case "rejected":
      return {
        bg: "bg-red-500",
        text: "text-red-600",
        label: "rejection",
        icon: <FaFileAlt />,
      };
    default:
      return {
        bg: "bg-blue-500",
        text: "text-blue-600",
        label: "leave request",
        icon: <IoDocumentText />,
      };
  }
};

const RecentActivity = ({ activities = [] }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-green-600 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {activities.map((item, index) => {
          const style = getStyles(item?.type);

          return (
            <div
              key={index}
              className="flex items-center justify-between pb-4 border-b border-gray-300/50 last:border-none"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-xl text-white shadow-md ${style.bg}`}
                >
                  {style.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    <span className="font-semibold">{item?.name || ""}</span>{" "}
                    {item?.action || ""}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {item?.time || ""}
                  </p>
                </div>
              </div>

              {/* Right Label */}
              <span
                className={`text-sm px-3 py-1 rounded-full bg-gray-200 ${style.text}`}
              >
                {style.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
