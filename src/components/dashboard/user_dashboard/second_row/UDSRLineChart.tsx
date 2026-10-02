import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useGetApplicationsData from "../../../../hooks/useGetApplicationsData";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import LineChartLegend from "./LineChartLegend";

export default function UDSRLineChart() {
  const { applicationHistory } = useOutletContext<outletContext>();
  const { appliedData } = useGetApplicationsData(applicationHistory);

  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h2 className="font-semibold text-lg mb-6">Applications Trend</h2>
      <LineChartLegend />
      <ResponsiveContainer width="100%" height={280}>
        <LineChart margin={{ right: 40, top: 20 }} data={appliedData}>
          <Line
            dataKey="count"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={({ cx, cy, index }) =>
              index === appliedData.length - 1 ? (
                <circle cx={cx} cy={cy} r={4} fill="#3b82f6" />
              ) : null
            }
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            stroke="#D1D5DB"
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={Number(y) + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={14}
              >
                {payload.value}
              </text>
            )}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            stroke="#D1D5DB"
            tick={({ x, y, payload }) => (
              <text
                x={Number(x) - 5}
                y={y}
                textAnchor="end"
                dominantBaseline="central"
                fontSize={14}
              >
                {payload.value}
              </text>
            )}
          />
          <CartesianGrid stroke="#F3F4F6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
