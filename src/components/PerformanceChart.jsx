import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { date: "01", thisMonth: 8, lastMonth: 7 },
  { date: "02", thisMonth: 6, lastMonth: 8 },
  { date: "03", thisMonth: 7, lastMonth: 6 },
  { date: "04", thisMonth: 5, lastMonth: 7 },
  { date: "05", thisMonth: 9, lastMonth: 8 },
  { date: "06", thisMonth: 7, lastMonth: 6 },
  { date: "07", thisMonth: 10, lastMonth: 7 },
];

export default function PerformanceChart() {
  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">Performance</h2>
        <h5 className="text-xs font-extralight border border-zinc-500 rounded-2xl py-2 px-2 flex items-center gap-1 hover:cursor-pointer">
          01-07 May <ChevronDown className="w-4 h-4" />
        </h5>
      </div>
      <div className="rounded-lg p-6 shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 12]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#F59E42"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
