import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";
import sortHistory from "../utils/sortHistory";

export default function useSortApplications(
  applicationHistory: application[],
  sortType: string = "oldest first",
) {
  const { weekStart, weekEnd } = getCurrentWeek();
  let sortedApplications: Record<applicationStatus, application[]> = {
    applied: [],
    response: [],
    interview: [],
    offer: [],
    rejected: [],
  };
  let currentWeekApplications: Record<applicationStatus | "total", number> = {
    applied: 0,
    response: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
    total: 0
  };

  const sortedHistory = sortHistory(applicationHistory, sortType);
  sortedHistory.map((application) => {
    const currentDate = application[application.current_status];
    if (currentDate && currentDate >= weekStart && currentDate <= weekEnd) {
      currentWeekApplications[application.current_status]++;
      currentWeekApplications.total++
    }
    sortedApplications[application.current_status].push(application);
  });

  return { sortedApplications, currentWeekApplications };
}

function getCurrentWeek() {
  let weekStart: Date | string = new Date();
  weekStart.setDate(weekStart.getDate() - weekStart.getDay() + 1);
  weekStart = weekStart.toISOString();
  weekStart = weekStart.slice(0, 10);

  let weekEnd: Date | string = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  weekEnd = weekEnd.toISOString();
  weekEnd = weekEnd.slice(0, 10);

  return { weekStart, weekEnd };
}
