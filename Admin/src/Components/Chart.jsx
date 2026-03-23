import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 8 },
  { name: "Apr", value: 18 },
  { name: "May", value: 22 },
  { name: "Jun", value: 25 },
];

const Chart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-800">
          Monthly Leave Trends
        </h2>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center mt-4 text-blue-600 text-sm">
        <span className="flex items-center gap-2">
          <span className="w-4 h-1 bg-blue-600 inline-block"></span>
          Leave Requests
        </span>
      </div>
    </div>
  );
};

export default Chart;
