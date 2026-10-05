import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";
import sortHistory from "../utils/sortHistory";

export default function useSeperateApplications(
  applicationHistory: application[],
  sortType: string = "oldest first",
) {
  let seperatedApplications: Record<applicationStatus, application[]> = {
    applied: [],
    response: [],
    interview: [],
    offer: [],
    rejected: [],
  };

  const sortedHistory = sortHistory(applicationHistory, sortType);
  sortedHistory.map((application) => {
    seperatedApplications[application.current_status].push(application);
  });

  return { seperatedApplications };
}

