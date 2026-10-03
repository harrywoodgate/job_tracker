import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";
import getCurrentWeek from "../utils/getCurrentWeek";
import getLast30Days from "../utils/getLast30Days";
import sortHistory from "../utils/sortHistory";

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

  const getLast30DaysCount = () => {
    const last30DaysCount = getLast30Days();
    let data = {
      applied: {
        count: 0,
        active: false,
      },
      response: {
        count: 0,
        active: false,
      },
      interview: {
        count: 0,
        active: false,
      },
      offer: {
        count: 0,
        active: false,
      },
      rejected: {
        count: 0,
        active: false,
      },
    };

    const sortedApplications = sortHistory(applications, "oldest first")
    sortedApplications.map((application) => {
      const date = application[application.current_status];
      const status = application.current_status;
      data[status].active = false;
      last30DaysCount.map((entry) => {
        if (entry.date === date) {
          data[status].count++;
          data[status].active = true;
        }
        if (data[status].active) {
          entry[status] = data[status].count;
        }
      });
    });

    return (last30DaysCount)
  };

  return { getCurrentWeekCount, getLast30DaysCount };
}
