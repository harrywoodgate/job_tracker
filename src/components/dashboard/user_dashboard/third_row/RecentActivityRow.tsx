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
    response: "",
    interview: "",
    offer: "",
    rejected: "",
  };

  const colourScheme = {
    applied: "bg-blue-500",
    response: "",
    interview: "",
    offer: "",
    rejected: "",
  }

  return (
    <div className="flex justify-between items-center border-[1px] border-gray-200 border-l-6 border-l-blue-500 p-2 rounded-md">
      <div className="flex items-center gap-x-2">
        <div className="bg-blue-100 rounded-full h-[25px] w-[25px] flex items-center justify-center">{svg[application.current_status]}</div>
        <p className="text-xs">{text[application.current_status]}</p>
      </div>
      <p className="text-xs text-gray">{application[application.current_status]}</p>
    </div>
  );
}
