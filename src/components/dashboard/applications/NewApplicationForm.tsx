import { useState } from "react";

export default function NewApplicationForm({
  active,
  setActive,
  status,
  setStatus,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobType, setJobType] = useState("");
  const [date, setDate] = useState("");

  return (
    <div
      className={
        active
          ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="bg-white p-6 rounded-md">
        <form className="flex flex-col gap-y-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-1">
              <h1 className="font-bold text-xl">Add new job</h1>
              <p className="text-gray text-xs">
                Fill in the details below to add a new application to your
                tracker
              </p>
            </div>
            <div
              className="cursor-pointer text-gray"
              onClick={() => setActive(false)}
            >
              X
            </div>
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
                onChange={(e) => setJobTitle(e.target.value)}
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
                onChange={(e) => setCompany(e.target.value)}
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
                  jobType === "remote"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  jobType === "remote" ? setJobType("") : setJobType("remote");
                }}
              >
                Remote
              </div>
              <div
                className={
                  jobType === "hybrid"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  jobType === "hybrid" ? setJobType("") : setJobType("hybrid");
                }}
              >
                Hybrid
              </div>
              <div
                className={
                  jobType === "onsite"
                    ? "p-1 rounded-md cursor-pointer text-white font-semibold bg-teal border-1 border-teal text-xs py-2 px-4"
                    : "p-1 rounded-md cursor-pointer text-gray font-semibold border-1 border-gray-200 text-xs py-2 px-4"
                }
                onClick={() => {
                  jobType === "onsite" ? setJobType("") : setJobType("onsite");
                }}
              >
                Onsite
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-sm font-semibold">Current status</label>
            <div className="flex gap-x-1">
              <div
                className={
                  status === "applied"
                    ? "p-1 rounded-md cursor-pointer text-white bg-blue-700 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-blue-600 bg-blue-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => setStatus("applied")}
              >
                Applied
              </div>
              <div
                className={
                  status === "response"
                    ? "p-1 rounded-md cursor-pointer text-white bg-teal-700 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-teal-600 bg-teal-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => setStatus("response")}
              >
                Response
              </div>
              <div
                className={
                  status === "interview"
                    ? "p-1 rounded-md cursor-pointer text-white bg-yellow-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-yellow-600 bg-yellow-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => setStatus("interview")}
              >
                Interview
              </div>
              <div
                className={
                  status === "offer"
                    ? "p-1 rounded-md cursor-pointer text-white bg-green-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-green-600 bg-green-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => setStatus("offer")}
              >
                Offer
              </div>
              <div
                className={
                  status === "rejected"
                    ? "p-1 rounded-md cursor-pointer text-white bg-red-600 font-semibold px-4 py-2 text-xs"
                    : "p-1 rounded-md cursor-pointer text-red-600 bg-red-100 font-semibold px-4 py-2 text-xs"
                }
                onClick={() => setStatus("rejected")}
              >
                Rejected
              </div>
            </div>
          </div>
          <label
            htmlFor="date"
            className="flex flex-col gap-y-2 text-sm font-semibold"
          >
            Date
            <input
              type="date"
              id="date"
              className="border-1 border-gray-200 p-2 font-normal text-xs rounded-md"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <div className="flex justify-between mt-2">
            <button className="bg-white font-semibold text-gray border-1 border-gray-200 px-4 py-2 rounded-md text-xs cursor-pointer"
            onClick={() => setActive(false)}>
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
