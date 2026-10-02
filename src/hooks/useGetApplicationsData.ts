import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";

export default function useGetApplicationsData(applications: application[]) {
  const { weekStart, weekEnd } = getCurrentWeek();
  let currentWeekApplications: Record<applicationStatus | "total", number> = {
    applied: 0,
    response: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
    total: 0,
  };

  let counter = 0;

  type appliedData = {
    count: number,
    date: string
  }

  let appliedData: appliedData[] = [];

  applications.map((application) => {
    const currentDate = application[application.current_status];
    if (currentDate && currentDate >= weekStart && currentDate <= weekEnd) {
      currentWeekApplications[application.current_status]++;
      currentWeekApplications.total++;
    }
    if (currentDate && application.current_status === "applied") {
      appliedData.push({
        count: counter,
        date: currentDate
      })
      counter++;
    }
  });
  return { currentWeekApplications, appliedData };
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
