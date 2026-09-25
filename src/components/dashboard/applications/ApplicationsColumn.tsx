import type { application } from "../../../types/application";
import ApplicationTile from "./ApplicationTile";
import useApplicationsContext from "../../../hooks/useApplicationsContext";
import type { applicationStatus } from "../../../types/applicationStatus";

export default function ApplicationsColumn({
  heading,
  colourIndex,
  applications,
  mobileColumnActive,
  setMobileColumnActive,
  handleDrop,
}: {
  heading: string;
  colourIndex: number;
  applications: application[];
  mobileColumnActive: string;
  setMobileColumnActive: React.Dispatch<React.SetStateAction<string>>;
  handleDrop: (newStatus: applicationStatus) => void;
}) {
  const { setFormActive, dispatch, setFormType } = useApplicationsContext();
  const colours = [
    "bg-blue-500",
    "bg-teal",
    "bg-yellow-500",
    "bg-green-500",
    "bg-red-500",
  ];
  const count = applications.length;

  return (
    <div
      className="border-2 border-gray-200 rounded-md px-2 py-4 md:grid grid-rows-[auto_1fr_auto] gap-y-4"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleDrop(heading.toLowerCase() as applicationStatus)}
      }
    >
      <div className="flex flex-col gap-y-4 items-center">
        <div className="flex justify-between w-full items-center px-2">
          <div className="flex items-center gap-x-2">
            <div
              className={`rounded-full ${colours[colourIndex]} h-[8px] w-[8px]`}
            ></div>
            <h2 className="font-medium text-xs lg:text-sm">{heading}</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="bg-gray-200 font-medium rounded-lg px-2 py-0.5 lg:py-1 text-[10px] lg:text-xs flex items-center">
              {count}
            </p>
            <svg
              onClick={() => {
                mobileColumnActive === heading
                  ? setMobileColumnActive("")
                  : setMobileColumnActive(heading);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="md:hidden w-[20px] fill-gray"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block h-[2px] bg-gray-200 w-[90%]"></div>
      </div>
      <div
        className={
          mobileColumnActive === heading
            ? "flex flex-col gap-y-2 max-h-[394px] overflow-scroll pt-6 transition-[max-height] duration-200"
            : "md:flex flex-col gap-y-2 h-[394px] overflow-scroll max-h-0 md:max-h-full"
        }
      >
        {applications &&
          applications.map((application) => (
            <ApplicationTile
              application={application}
              heading={heading}
              key={application.id}
            />
          ))}
      </div>
      <div
        className="hidden md:flex justify-center gap-x-1 cursor-pointer text-sm text-gray"
        onClick={() => {
          dispatch({ type: "current_status", value: heading.toLowerCase() });
          setFormType("new");
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
