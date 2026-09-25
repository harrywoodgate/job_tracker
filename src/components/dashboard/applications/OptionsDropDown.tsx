import type { application } from "../../../types/application";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import useApplicationsContext from "../../../hooks/useApplicationsContext";

export default function OptionsDropDown({
  active,
  setActive,
  application,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  application: application;
}) {
  const { deleteApplication } = useOutletContext<outletContext>();
  const { setFormActive, dispatch, setFormType } = useApplicationsContext();

  return (
    <div
      className={
        active
          ? "absolute flex flex-col gap-y-1 items-center right-0 z-10 top-[100%] border-1 border-gray-100 shadow-sm bg-white p-1 rounded-sm"
          : "hidden"
      }
    >
      <div
        className="flex items-center gap-x-2 w-full hover:bg-gray-100 rounded-sm md:max-lg:pr-8 pr-12 pl-2 py-1"
        onClick={() => {
          dispatch({ type: "editApplication", value: application });
          setFormType("edit");
          setFormActive(true);
          setActive(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="md:max-lg:w-[10px] w-[12px]"
        >
          <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
        <p className="md:max-lg:text-[10px] text-xs font-semibold">Edit</p>
      </div>
      <div
        className="flex items-center gap-x-2 w-full hover:bg-gray-100 rounded-sm md:max-lg:pr-8 pr-12 pl-2 py-1"
        onClick={() => {
          setActive(false);
          deleteApplication(application);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="md:max-lg:w-[10px] w-[12px] fill-red-500"
        >
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
        <p className="md:max-lg:text-[10px] text-xs font-semibold text-red-500">Delete</p>
      </div>
    </div>
  );
}
