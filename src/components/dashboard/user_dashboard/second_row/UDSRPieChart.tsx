import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import useSortApplications from "../../../../hooks/useSortApplications";
import { PieChart, Pie, Sector, Tooltip } from "recharts";

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
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h2 className="font-semibold">Application Status Breakdown</h2>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="count"
          nameKey="status"
          innerRadius={50}
          shape={(props) => <Sector {...props} fill={colours[props.index]} />}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
