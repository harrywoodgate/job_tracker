export default function getCurrentWeek() {
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
