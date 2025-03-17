import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  pv: Math.floor(Math.random() * 200 - 100),
  uv: Math.floor(Math.random() * 200 - 100),
}));

function BarChart() {
  return (
    <div className="h-full w-full p-4">
      <h3 className="text-white mb-2">Bar Chart</h3>
      <ResponsiveContainer width="100%" height="80%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
            labelStyle={{ color: "#fff" }}
          />
          <Legend />
          <Bar dataKey="pv" fill="#818cf8" />
          <Bar dataKey="uv" fill="#34d399" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChart;
