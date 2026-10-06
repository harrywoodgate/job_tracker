import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";
import getCurrentWeek from "../utils/getCurrentWeek";
import getLastDays from "../utils/getLastDays";

export default function useGetApplicationsData(applications: application[]) {
  const getCurrentWeekCount = () => {
    const { weekStart, weekEnd } = getCurrentWeek();
    let currentWeekCount: Record<applicationStatus | "total", number> = {
      applied: 0,
      response: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
      total: 0,
    };
    applications.map((application) => {
      const currentDate = application[application.current_status];
      if (currentDate && currentDate >= weekStart && currentDate <= weekEnd) {
        currentWeekCount[application.current_status]++;
        currentWeekCount.total++;
      }
    });
    return currentWeekCount;
  };

  const getLast7DaysCount = () => {
    const { weekStart, weekEnd } = getLastDays(7);

    let last7DaysCount: Record<applicationStatus | "total", number> = {
      applied: 0,
      response: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
      total: 0,
    };
    applications.map((application) => {
      const currentDate = application[application.current_status];
      if (currentDate && currentDate >= weekStart && currentDate <= weekEnd) {
        last7DaysCount[application.current_status]++;
        last7DaysCount.total++;
      }
    });
    return last7DaysCount;
  };

  const getLast30DaysCount = () => {
    const { weekStart, weekEnd } = getLastDays(30);

    let last30DaysCount: Record<applicationStatus | "total", number> = {
      applied: 0,
      response: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
      total: 0,
    };
    applications.map((application) => {
      const currentDate = application[application.current_status];
      if (currentDate && currentDate >= weekStart && currentDate <= weekEnd) {
        last30DaysCount[application.current_status]++;
        last30DaysCount.total++;
      }
    });
    return last30DaysCount;
  };

  return { getCurrentWeekCount, getLast7DaysCount, getLast30DaysCount };
}
