import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1-2', value: 20 },
  { name: '2-3', value: 15 },
  { name: '3-4', value: 25 },
  { name: '4-5', value: 18 },
  { name: '5-6', value: 22 },
  { name: '6-7', value: 30 },
  { name: '7-8', value: 28 }
];

const COLORS = ['#818cf8', '#60a5fa', '#34d399', '#fbbf24', '#f87171', '#c084fc', '#f472b6'];

function SpiralChart() {
  return (
    <div className="h-full w-full p-4">
      <h3 className="text-white mb-2">Spiral Chart</h3>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="80%"
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpiralChart;