import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Production", value: 35, color: "#2563eb" },
  { name: "Control", value: 20, color: "#f59e0b" },
  { name: "Logistics", value: 15, color: "#10b981" },
  { name: "HR", value: 10, color: "#ef4444" },
  { name: "Sales", value: 12, color: "#8b5cf6" },
  { name: "Others", value: 8, color: "#ec4899" },
];

const PieChartDept = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 bg-purple-600 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-800">
          Department-wise Distribution
        </h2>
      </div>

      {/* Chart + Labels */}
      <div className="relative w-full h-72 flex items-center justify-center">
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Custom Labels (Positioned Around Pie) */}
        <div className="absolute w-full h-full pointer-events-none">
          
          <span className="absolute top-10 right-6 text-blue-600 font-medium">
            Production 35%
          </span>

          <span className="absolute left-4 top-1/2 text-orange-500 font-medium">
            Control 20%
          </span>

          <span className="absolute left-6 bottom-16 text-green-600 font-medium">
            Logistics 15%
          </span>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red-500 font-medium">
            HR 10%
          </span>

          <span className="absolute right-6 bottom-12 text-purple-600 font-medium">
            Sales 12%
          </span>

          <span className="absolute right-4 top-1/2 text-pink-500 font-medium">
            Others 8%
          </span>

        </div>
      </div>
    </div>
  );
};

export default PieChartDept;