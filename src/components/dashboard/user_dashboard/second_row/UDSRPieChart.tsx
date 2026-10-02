import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import useSortApplications from "../../../../hooks/useSortApplications";
import { PieChart, Pie, Sector, Tooltip } from "recharts";
import PieChartRow from "./PieChartRow";

export default function UDSRPieChart() {
  const { applicationHistory } = useOutletContext<outletContext>();
  const { sortedApplications } = useSortApplications(applicationHistory);

  const data = [
    { status: "Applied", count: sortedApplications.applied.length },
    { status: "Response", count: sortedApplications.response.length },
    { status: "Interview", count: sortedApplications.interview.length },
    { status: "Offer", count: sortedApplications.offer.length },
    { status: "Rejected", count: sortedApplications.rejected.length },
  ];

  const colours = [
    "#3b82f6",
    "var(--color-teal)",
    "#eab308",
    "#16a34a",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-sm shadow-sm p-4 pb-8">
      <h2 className="font-semibold mb-2">Application Status Breakdown</h2>
      <div className="flex justify-between">
        <div className="relative">
          <PieChart width={320} height={320}>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              innerRadius={80}
              shape={(props) => <Sector {...props} fill={colours[props.index]} />}
            />
            <Tooltip />
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold">{applicationHistory.length}</p>
            <p className="text-sm">Total</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 w-1/2 pt-10">
          <PieChartRow
            colourIndex={0}
            heading="Applied"
            total={sortedApplications.applied.length}
            percentage={(
              (sortedApplications.applied.length / applicationHistory.length) *
              100
            ).toFixed(0)}
          />
          <PieChartRow
            colourIndex={1}
            heading="Response"
            total={sortedApplications.response.length}
            percentage={(
              (sortedApplications.response.length / applicationHistory.length) *
              100
            ).toFixed(0)}
          />
          <PieChartRow
            colourIndex={2}
            heading="Interview"
            total={sortedApplications.interview.length}
            percentage={(
              (sortedApplications.interview.length /
                applicationHistory.length) *
              100
            ).toFixed(0)}
          />
          <PieChartRow
            colourIndex={3}
            heading="Offer"
            total={sortedApplications.offer.length}
            percentage={(
              (sortedApplications.offer.length / applicationHistory.length) *
              100
            ).toFixed(0)}
          />
          <PieChartRow
            colourIndex={4}
            heading="Rejected"
            total={sortedApplications.rejected.length}
            percentage={(
              (sortedApplications.rejected.length / applicationHistory.length) *
              100
            ).toFixed(0)}
          />
          <div className="grid grid-cols-[3fr_1fr_1fr] w-full mt-2">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">{applicationHistory.length}</p>
            <p className="text-gray">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
