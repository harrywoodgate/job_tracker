import type { application } from "../types/application";
import sortHistory from "./sortHistory";

export default function getRemindersData(applicationHistory: application[]) {
  applicationHistory = sortHistory(applicationHistory, "oldest first");
  let remindersApplications: application[] = [];
  let todaysDate: Date | string = new Date();
  todaysDate = todaysDate.toISOString();
  todaysDate = todaysDate.slice(0, 10);

  remindersApplications = applicationHistory.filter((application) => {
    const date = application[application.current_status];

    return (
      ["response", "interview", "offer"].includes(application.current_status) &&
      date !== undefined &&
      date > todaysDate
    );
  });

  return remindersApplications;
}
