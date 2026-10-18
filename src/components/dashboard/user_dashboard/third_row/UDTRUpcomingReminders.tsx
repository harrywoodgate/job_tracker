import getRemindersData from "../../../../utils/getRemindersData";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import UpcomingReminderRow from "./UpcomingReminderRow";

export default function UDTRUpcomingReminders() {
  const { applicationHistory } = useOutletContext<outletContext>();

  let remindersApplications = getRemindersData(applicationHistory);
  return (
    <div className="bg-white rounded-sm shadow-sm p-4">
      <h2 className="font-semibold">Upcoming Reminders</h2>
      <div className="flex flex-col h-[196px] gap-y-1 overflow-auto mt-4 justify-center">
        {remindersApplications.length === 0 && (
          <p className="text-sm text-center text-gray">
            No upcoming reminders
          </p>
        )}
        {remindersApplications.length > 0 &&
          remindersApplications.map((application) => (
            <UpcomingReminderRow
              application={application}
              key={application.id}
            />
          ))}
      </div>
    </div>
  );
}
