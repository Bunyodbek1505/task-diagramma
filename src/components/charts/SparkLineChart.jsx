import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { value: 10 }, { value: 25 }, { value: 15 }, { value: 30 },
  { value: 20 }, { value: 35 }, { value: 25 }, { value: 40 }
];

function SparkLineChart() {
  return (
    <div className="h-full w-full p-4">
      <h3 className="text-white mb-2">Spark Line</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SparkLineChart;