export default function getLast30Days() {
  type data = {
    date: string;
    applied: number;
    interview: number;
    offer: number;
    rejected: number;
    response: number;
  };

  let last30Days: data[] = [];

  for (let i = 30; i > 0; i--) {
    let currentDate: Date | string = new Date();
    currentDate.setDate(currentDate.getDate() - i);
    currentDate = currentDate.toISOString();
    currentDate = currentDate.slice(0, 10);
    last30Days.push({
      date: currentDate,
      applied: 0,
      interview: 0,
      offer: 0,
      rejected: 0,
      response: 0
    });
  }

  return last30Days;
}
