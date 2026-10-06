export default function getLast7Days() {
  let weekStart: Date | string = new Date();
  weekStart.setDate(weekStart.getDate() - 7);
  weekStart = weekStart.toISOString();
  weekStart = weekStart.slice(0, 10);

  let weekEnd: Date | string = new Date();
  weekEnd = weekEnd.toISOString();
  weekEnd = weekEnd.slice(0, 10);

  return {weekStart, weekEnd}
}
