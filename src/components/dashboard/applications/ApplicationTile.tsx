import OptionsDropDown from "./OptionsDropDown";
import { useState } from "react";
import type { applicationStatus } from "../../../types/applicationStatus";
import type { application } from "../../../types/application";
import { useRef, useEffect } from "react";
import useApplicationsContext from "../../../hooks/useApplicationsContext";

export default function ApplicationTile({
  application,
  heading,
}: {
  application: application;
  heading: string;
}) {
  const [optionsDropDownActive, setOptionsDropDownActive] = useState(false);
  const applicationDate = heading.toLocaleLowerCase() as applicationStatus;
  const jobTypeStyling: Record<string, string> = {
    remote:
      "text-green-600 bg-green-100 px-2 py-1 rounded-sm w-min md:max-lg:text-[8px] text-[10px] mt-1",
    hybrid:
      "text-blue-600 bg-blue-100 px-2 py-1 rounded-sm w-min md:max-lg:text-[8px] text-[10px] mt-1",
    onsite:
      "text-red-600 bg-red-100 px-2 py-1 rounded-sm w-min md:max-lg:text-[8px] text-[10px] mt-1",
  };
  const capitalisedJobTypes: Record<string, string> = {
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "Onsite",
  };
  const { setDraggedTile } = useApplicationsContext();

  // click anywhere else on screen to close drop down logic

  const dropDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setOptionsDropDownActive(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="bg-white rounded-md p-2 text-sm flex flex-col gap-y-1 shadow-sm"
      draggable
      onDragStart={() => setDraggedTile(application)}
    >
      <div className="flex justify-between items-center relative">
        <h3 className="md:max-lg:text-xs text-sm font-semibold">
          {application.job_title}
        </h3>
        <div ref={dropDownRef}>
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
      </div>
      <p className="md:max-lg:text-xs text-sm text-gray font-light">
        {application.company}
      </p>
      <div className="flex justify-between gap-x-1 items-center">
        <p className="text-gray font-extralight md:max-lg:text-[10px] text-[12px]">
          {heading} {application[applicationDate]}
        </p>
        <div className="flex justify-center items-center bg-black text-white md:max-lg:h-[20px] md:max-lg:w-[20px] h-[25px] w-[25px] font-semibold rounded-sm md:max-lg:text-[10px] text-xs">
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
