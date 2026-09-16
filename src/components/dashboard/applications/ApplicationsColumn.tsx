import type { application } from "../../../types/application";
import type { applicationStatus } from "../../../types/applicationStatus";

export default function ApplicationsColumn({
  heading,
  colourIndex,
  count,
  setStatus,
  setFormActive,
  applications,
}: {
  heading: string;
  colourIndex: number;
  count?: number;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  applications: application[];
}) {
  const colours = [
    "bg-blue-500",
    "bg-teal",
    "bg-yellow-500",
    "bg-green-500",
    "bg-red-500",
  ];
  const applicationDate = heading.toLocaleLowerCase() as applicationStatus;
  const jobTypeStyling: Record<string, string> = {
    remote:
      "text-green-600 bg-green-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
    hybrid: "text-blue-600 bg-blue-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
    onsite: "text-red-600 bg-red-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
  };
  const capitalisedJobTypes: Record<string, string> = {
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "Onsite",
  };

  return (
    <div className="border-2 border-gray-200 rounded-md px-2 py-4 grid grid-rows-[auto_1fr_auto] gap-y-4">
      <div className="flex flex-col gap-y-4 items-center">
        <div className="flex justify-between w-full items-center px-2">
          <div className="flex items-center gap-x-2">
            <div
              className={`rounded-full ${colours[colourIndex]} h-[8px] w-[8px]`}
            ></div>
            <h2 className="font-medium text-sm">{heading}</h2>
          </div>
          <p className="bg-gray-200 font-medium rounded-lg px-2 py-1 text-xs flex items-center">
            {count ? count : 0}
          </p>
        </div>
        <div className="h-[2px] bg-gray-200 w-[90%]"></div>
      </div>
      <div className="flex flex-col gap-y-2 h-[384px] overflow-scroll">
        {applications &&
          applications.map((application) => (
            <div className="bg-white rounded-md p-2 text-sm flex flex-col gap-y-1">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{application.job_title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px] pb-[1px] cursor-pointer">
                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                </svg>{" "}
              </div>
              <p className="text-gray font-light">{application.company}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray font-extralight text-[12px]">
                  {heading} {application[applicationDate]}
                </p>
                <div className="bg-black text-white py-1 px-2 rounded-sm text-xs">
                  C
                </div>
              </div>
              <div
                className={
                  application.job_type
                    ? jobTypeStyling[application.job_type]
                    : ""
                }
              >
                {application.job_type
                  ? capitalisedJobTypes[application.job_type]
                  : ""}
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex justify-center gap-x-1 cursor-pointer text-sm text-gray"
        onClick={() => {
          setStatus(heading.toLowerCase());
          setFormActive(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-gray w-[20px]"
        >
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>Add</span>
      </div>
    </div>
  );
}
