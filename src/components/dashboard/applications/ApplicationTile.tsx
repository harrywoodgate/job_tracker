import OptionsDropDown from "./OptionsDropDown";
import { useState } from "react";
import type { applicationStatus } from "../../../types/applicationStatus";
import type { application } from "../../../types/application";

export default function ApplicationTile({ application, heading } : {
    application: application;
    heading: string;
}) {
  const [optionsDropDownActive, setOptionsDropDownActive] = useState(false);
  const applicationDate = heading.toLocaleLowerCase() as applicationStatus;
  const jobTypeStyling: Record<string, string> = {
    remote:
      "text-green-600 bg-green-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
    hybrid:
      "text-blue-600 bg-blue-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
    onsite:
      "text-red-600 bg-red-100 px-2 py-1 rounded-sm w-min text-[10px] mt-1",
  };
  const capitalisedJobTypes: Record<string, string> = {
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "Onsite",
  };

  return (
    <div className="bg-white rounded-md p-2 text-sm flex flex-col gap-y-1 shadow-sm">
      <div className="flex justify-between items-center relative">
        <h3 className="font-semibold">{application.job_title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[20px] pb-[1px] cursor-pointer"
          onClick={() => setOptionsDropDownActive(!optionsDropDownActive)}
        >
          <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
        </svg>
        <OptionsDropDown
          active={optionsDropDownActive}
          setActive={setOptionsDropDownActive}
          application={application}
        />
      </div>
      <p className="text-gray font-light">{application.company}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray font-extralight text-[12px]">
          {heading} {application[applicationDate]}
        </p>
        <div className="flex justify-center items-center bg-black text-white h-[25px] w-[25px] font-semibold rounded-sm text-xs">
          C
        </div>
      </div>
      <div
        className={
          application.job_type ? jobTypeStyling[application.job_type] : ""
        }
      >
        {application.job_type ? capitalisedJobTypes[application.job_type] : ""}
      </div>
    </div>
  );
}
