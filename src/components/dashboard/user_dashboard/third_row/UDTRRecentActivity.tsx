import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import sortHistory from "../../../../utils/sortHistory";
import RecentActivityRow from "./RecentActivityRow";

export default function UDTRRecentActivity() {
  const { applicationHistory } = useOutletContext<outletContext>();
  const sortedHistory = sortHistory(applicationHistory, "oldest first");
  const recentActivity = sortedHistory.slice(-4);

  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h2 className="font-semibold mb-4">Recent Activity</h2>
      <div className="flex flex-col h-[196px] justify-center gap-y-1">
        {recentActivity.length === 0 && (
          <p className="text-sm text-center text-gray">No recent activity <br /> Go to applications to add more!</p>
        )}
        {recentActivity.length > 0 &&
          recentActivity.map((application) => {
            return <RecentActivityRow application={application} key={application.id}/>;
          })}
      </div>
    </div>
  );
}
