import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useGetApplicationsData from "../../../../hooks/useGetApplicationsData";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import { useState } from "react";

export default function UDSRBarChart() {
  const [timePeriod, setTimePeriod] = useState("last 7 days");
  const [selectorActive, setSelectorActive] = useState(false);
  const { applicationHistory } = useOutletContext<outletContext>();
  const { getLast7DaysCount, getLast30DaysCount } =
    useGetApplicationsData(applicationHistory);
  const last7DaysCount = getLast7DaysCount();
  const last30DaysCount = getLast30DaysCount();
  let currentData =
    timePeriod === "last 7 days" ? last7DaysCount : last30DaysCount;

  const data = [
    { status: "Applied", count: currentData.applied },
    { status: "Response", count: currentData.response },
    { status: "Interview", count: currentData.interview },
    { status: "Offer", count: currentData.offer },
    { status: "Rejected", count: currentData.rejected },
  ];

  const colours = [
    "#3b82f6",
    "var(--color-teal)",
    "#eab308",
    "#16a34a",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Applications Trend</h2>
        <div className="relative">
          <div
            className=" border-gray-200 rounded-sm border-[1px] px-1 pl-2 py-0.5 flex gap-x-1"
            onClick={() => setSelectorActive(!selectorActive)}
          >
            <p className="text-sm">
              {timePeriod === "last 7 days" ? "Last 7 days" : "Last 30 days"}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[20px] cursor-pointer"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <div
            className={
              selectorActive
                ? "absolute z-1 text-sm py-0.5 border-gray-200 rounded-sm border-[1px] w-full"
                : "hidden"
            }
          >
            <div
              className="mb-0.5 hover:bg-gray-100 pl-2 cursor-pointer"
              onClick={() => {
                setTimePeriod("last 7 days");
                setSelectorActive(false);
              }}
            >
              Last 7 days
            </div>
            <div
              className="pl-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setTimePeriod("last 30 days");
                setSelectorActive(false);
              }}
            >
              Last 30 days
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <Tooltip cursor={false} />
          <XAxis dataKey="status" tickLine={false} tickMargin={10} />
          <YAxis tickLine={false} tickMargin={10} />
          <Bar
            dataKey="count"
            barSize={40}
            shape={(props) => (
              <rect
                x={props.x}
                y={props.y}
                width={props.width}
                height={props.height}
                fill={colours[props.index]}
                rx={5}
              />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
