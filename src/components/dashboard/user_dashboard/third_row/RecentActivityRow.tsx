import type { application } from "../../../../types/application";

export default function RecentActivityRow({
  application,
}: {
  application: application;
}) {
  const text = {
    applied: `You applied for ${application.job_title} at ${application.company}`,
    response: `You recieved a response from ${application.company}`,
    interview: `Interview scheduled with ${application.company}`,
    offer: `Offer recieved from ${application.company}`,
    rejected: `${application.company} rejected your application`,
  };

  const svg = {
    applied: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-blue-500"
      >
        <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
      </svg>
    ),
    response: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-teal"
      >
        <path d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z" />
      </svg>
    ),
    interview: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-yellow-500"
      >
        <path d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z" />
      </svg>
    ),
    offer: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-[20px] fill-green-700"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
      </svg>
    ),
    rejected: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] fill-red-500">
        <path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />
      </svg>
    ),
  };

  const secondaryColour = {
    applied: "bg-blue-100",
    response: "bg-teal-100",
    interview: "bg-yellow-100",
    offer: "bg-sky-100",
    rejected: "bg-red-100",
  };

  const borderColour = {
    applied: "border-l-blue-500",
    response: "border-l-teal",
    interview: "border-l-yellow-500",
    offer: "border-l-green-700",
    rejected: "border-l-red-500",
  };

  return (
    <div
      className={`flex justify-between items-center border-[1px] border-gray-200 border-l-6 ${borderColour[application.current_status]} p-2 rounded-md`}
    >
      <div className="flex items-center gap-x-2">
        <div
          className={`${secondaryColour[application.current_status]} rounded-full h-[25px] w-[25px] flex items-center justify-center`}
        >
          {svg[application.current_status]}
        </div>
        <p className="text-xs">{text[application.current_status]}</p>
      </div>
      <p className="text-xs text-gray">
        {application[application.current_status]}
      </p>
    </div>
  );
}
