import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import type { dispatchAction } from "../../../types/dispatchAction";
import type { application } from "../../../types/application";
import type { applicationStatus } from "../../../types/applicationStatus";

export default function ApplicationForm({
  active,
  setActive,
  application,
  dispatch,
  formType,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  application: application;
  dispatch: React.ActionDispatch<[action: dispatchAction]>;
  formType: string
}) {
  const { addApplication, updateApplication } = useOutletContext<outletContext>();
  const status = application.current_status as applicationStatus

  return (
    <div
      className={
        active
          ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="bg-white p-6 rounded-md">
        <form
          className="flex flex-col gap-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            formType === "new" ? addApplication(e, {
              id: crypto.randomUUID(),
              job_title: application.job_title,
              company: application.company,
              current_status: application.current_status,
              job_type: application.job_type,
              [application.current_status]: application[status],
            }) : updateApplication(application);
            dispatch({ type: "resetForm" });
            setActive(false);
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-bold text-xl">Add new job</h1>
              <p className="text-gray text-xs">
                Fill in the details below to add a new application to your
                tracker
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-gray w-[20px] cursor-pointer"
              onClick={() => {
                dispatch({ type: "resetForm" });
                setActive(false);
              }}
            >
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </div>
          <div className="flex gap-x-6 mt-4">
            <label
              htmlFor="job_title"
              className="flex flex-col gap-y-2 text-sm font-semibold"
            >
              Job Title *
              <input
                type="text"
                id="job_title"
                placeholder="e.g. Coffee Barista"
                className="border-1 border-gray-200 rounded-md py-2 px-2 text-xs font-normal"
                value={application.job_title}
                onChange={(e) =>
                  dispatch({ type: "job_title", value: e.target.value })
                }
                required
              />
            </label>
            <label
              htmlFor="company"
              className="flex flex-col text-sm gap-y-2 font-semibold"
            >
              Company *
              <input
                type="text"
                id="company"
                placeholder="e.g. Acme Inc"
                className="border-1 border-gray-200 rounded-md py-2 px-2 text-xs font-normal"
                value={application.company}
                onChange={(e) =>
                  dispatch({ type: "company", value: e.target.value })
                }
                required
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="job_type"
              className="flex flex-col text-sm font-semibold"
            >
              Job Type
            </label>
            <div className="flex gap-x-1 mt-2">
              <div
                className={
                  application.job_type === "remote"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  application.job_type === "remote"
                    ? dispatch({ type: "job_type", value: "" })
                    : dispatch({ type: "job_type", value: "remote" });
                }}
              >
                Remote
              </div>
              <div
                className={
                  application.job_type === "hybrid"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  application.job_type === "hybrid"
                    ? dispatch({ type: "job_type", value: "" })
                    : dispatch({ type: "job_type", value: "hybrid" });
                }}
              >
                Hybrid
              </div>
              <div
                className={
                  application.job_type === "onsite"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  application.job_type === "onsite"
                    ? dispatch({ type: "job_type", value: "" })
                    : dispatch({ type: "job_type", value: "onsite" });
                }}
              >
                Onsite
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm font-semibold">Current status</label>
            <div className="flex gap-x-1">
              {/* // could maybe break these up into smaller components but not sure if its better tbh */}
              <div
                className={
                  application.current_status === "applied"
                    ? "p-1 rounded-md cursor-pointer text-white bg-blue-700 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-blue-600 bg-blue-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => dispatch({ type: "current_status", value: "applied" })}
              >
                Applied
              </div>
              <div
                className={
                  application.current_status === "response"
                    ? "p-1 rounded-md cursor-pointer text-white bg-teal-700 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-teal-600 bg-teal-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => dispatch({ type: "current_status", value: "response" })}
              >
                Response
              </div>
              <div
                className={
                  application.current_status === "interview"
                    ? "p-1 rounded-md cursor-pointer text-white bg-yellow-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-yellow-600 bg-yellow-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => dispatch({ type: "current_status", value: "interview" })}
              >
                Interview
              </div>
              <div
                className={
                  application.current_status === "offer"
                    ? "p-1 rounded-md cursor-pointer text-white bg-green-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-green-600 bg-green-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => dispatch({ type: "current_status", value: "offer" })}
              >
                Offer
              </div>
              <div
                className={
                  application.current_status === "rejected"
                    ? "p-1 rounded-md cursor-pointer text-white bg-red-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-red-600 bg-red-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => dispatch({ type: "current_status", value: "rejected" })}
              >
                Rejected
              </div>
            </div>
          </div>
          <label
            htmlFor="date"
            className="flex flex-col gap-y-2 text-sm font-semibold"
          >
            Date *
            <input
              type="date"
              id="date"
              className="border-1 border-gray-200 p-2 font-normal text-xs rounded-md"
              value={application[status]}
              onChange={(e) =>
                dispatch({ type: "date", status:application.current_status, value: e.target.value })
              }
              required
            />
          </label>
          <div className="flex justify-between mt-2">
            <button
              type="button"
              className="bg-white font-semibold text-gray border-1 border-gray-200 px-4 py-2 rounded-md text-xs cursor-pointer"
              onClick={() => {
                dispatch({ type: "resetForm" });
                setActive(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-teal font-semibold text-white px-4 py-2 rounded-md text-xs cursor-pointer"
            >
              Save application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
