export default function getLastDays(number: number) {
  let weekStart: Date | string = new Date();
  weekStart.setDate(weekStart.getDate() - number);
  weekStart = weekStart.toISOString();
  weekStart = weekStart.slice(0, 10);

  let weekEnd: Date | string = new Date();
  weekEnd = weekEnd.toISOString();
  weekEnd = weekEnd.slice(0, 10);

  return {weekStart, weekEnd}
}
