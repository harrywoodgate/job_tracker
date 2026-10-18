import type { application } from "../../../../types/application";

export default function UpcomingReminderRow({
  application,
}: {
  application: application;
}) {
  const applicationStatus = application.current_status as
    | "response"
    | "interview"
    | "offer";

  const text = {
    response: `Follow up with ${application.company}`,
    interview: `Interview with ${application.company}`,
    offer: `Respond to ${application.company}`,
  };
  const svg = {
    response: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-teal"
      >
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
      </svg>
    ),
    interview: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-orange-500"
      >
        <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
      </svg>
    ),
    offer: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] fill-green-700">
        <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
      </svg>
    ),
  };
  const colours = {
    response: "bg-teal-100",
    interview: "bg-orange-100",
    offer: "bg-sky-100",
  };

  return (
    <div className="flex justify-between items-center rounded-md p-2 border-[1px] border-gray-200">
      <div className="flex items-center gap-x-2">
        <div
          className={`w-[28px] h-[28px] ${colours[applicationStatus]} flex items-center justify-center rounded-md`}
        >{svg[applicationStatus]}</div>
        <p className="text-xs">{text[applicationStatus]}</p>
      </div>
      <p className="text-xs text-gray">{application[applicationStatus]}</p>
    </div>
  );
}
