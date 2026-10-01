import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";
import sortHistory from "../utils/sortHistory";

export default function useSortApplications(
  applicationHistory: application[],
  sortType: string = "oldest first",
) {
  let sortedApplications: Record<applicationStatus, application[]> = {
    applied: [],
    response: [],
    interview: [],
    offer: [],
    rejected: [],
  };

  const sortedHistory = sortHistory(applicationHistory, sortType);
  sortedHistory.map((application) => {
    sortedApplications[application.current_status].push(application);
  });

  return { sortedApplications };
}

