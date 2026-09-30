import type { formDispatchAction } from "../../../types/formDispatchAction";
import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";

export default function ApplicationsHeader({
  setFormActive,
  dispatch,
  setFormType,
  setSortType,
}: {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.ActionDispatch<[action: formDispatchAction]>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [sortDropdownActive, setSortDropdownActive] = useState(false);
  const { dropDownRef } = useClickOutside(setSortDropdownActive);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-semibold text-lg md:text-2xl">Applications</h1>
        <p className="text-gray text-xs md:text-sm">
          Track and manage all your job applications
        </p>
      </div>
      <div className="flex items-center gap-x-2 relative">
        <button
          className="flex cursor-pointer gap-x-1 bg-primary-blue text-white text-sm h-min py-1 md:py-2 px-2 md:px-3 rounded-md"
          onClick={() => {
            dispatch({ type: "current_status", value: "applied" });
            setFormType("new");
            setFormActive(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-white w-[20px]"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          <span className="hidden md:block">New Application</span>
        </button>
        <div ref={dropDownRef}>
          <button
            className="flex cursor-pointer text-sm items-center h-min py-1 gap-x-1 md:py-2 px-2 md:px-3 rounded-md border-1 border-gray-200 shadow-sm"
            onClick={() => setSortDropdownActive(!sortDropdownActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[16px]"
            >
              <path d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z" />
            </svg>
            <span className="font-medium hidden md:block">Sort</span>
          </button>
          <div
            className={
              sortDropdownActive
                ? "absolute right-0 top-[120%] bg-white text-xs text-nowrap font-medium rounded-sm shadow-sm p-1 flex flex-col gap-y-1"
                : "hidden"
            }
          >
            <div
              className="hover:bg-gray-100 rounded-sm w-full pl-2 pr-8 py-1"
              onClick={() => {
                setSortType("oldest first");
                setSortDropdownActive(false);
              }}
            >
              Oldest first
            </div>
            <div
              className="hover:bg-gray-100 rounded-sm w-full pl-2 py-1"
              onClick={() => {
                setSortType("newest first");
                setSortDropdownActive(false);
              }}
            >
              Newest first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
