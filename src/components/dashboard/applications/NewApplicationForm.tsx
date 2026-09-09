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
  setStatus: React.Dispatch<React.SetStateAction<string>>
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
        <form className="flex flex-col gap-y-2">
          <div className="flex justify-between">
              <h1 className="font-bold text-xl">Enter new job</h1>
              <div className="font-bold cursor-pointer" onClick={() => setActive(false)}>X</div>
          </div>
          <label htmlFor="job_title" className="flex flex-col">
            Job Title:
            <input
              type="text"
              id="job_title"
              placeholder="job title"
              className="border-1 border-black p-1"
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>
          <label htmlFor="company" className="flex flex-col">
            Company:
            <input
              type="text"
              id="company"
              placeholder="company"
              className="border-1 border-black p-1"
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </label>
          <label htmlFor="job_type" className="flex flex-col">
            Job Type:
          </label>
          <div className="flex gap-x-1">
            <div
              className={
                jobType === "remote"
                  ? "p-1 rounded-sm cursor-pointer text-green-900 bg-green-400 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-green-700 bg-green-100 text-xs"
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
                  ? "p-1 rounded-sm cursor-pointer text-blue-900 bg-blue-400 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-blue-700 bg-blue-100 text-xs"
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
                  ? "p-1 rounded-sm cursor-pointer text-red-900 bg-red-400 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-red-700 bg-red-100 text-xs"
              }
              onClick={() => {
                jobType === "onsite" ? setJobType("") : setJobType("onsite");
              }}
            >
              Onsite
            </div>
          </div>
          <label>Current status:</label>
          <div className="flex gap-x-1">
            <div
              className={
                status === "applied"
                  ? "p-1 rounded-sm cursor-pointer text-white bg-blue-900 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-white bg-blue-500 text-xs"
              }
              onClick={() => setStatus("applied")}
            >
              Applied
            </div>
            <div
              className={
                status === "response"
                  ? "p-1 rounded-sm cursor-pointer text-white bg-[#005360] text-xs"
                  : "p-1 rounded-sm cursor-pointer text-white bg-teal text-xs"
              }
              onClick={() => setStatus("response")}
            >
              Response
            </div>
            <div
              className={
                status === "interview"
                  ? "p-1 rounded-sm cursor-pointer text-white bg-yellow-700 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-white bg-yellow-500 text-xs"
              }
              onClick={() => setStatus("interview")}
            >
              Interview
            </div>
            <div
              className={
                status === "offer"
                  ? "p-1 rounded-sm cursor-pointer text-white bg-green-700 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-white bg-green-500 text-xs"
              }
              onClick={() => setStatus("offer")}
            >
              Offer
            </div>
            <div
              className={
                status === "rejected"
                  ? "p-1 rounded-sm cursor-pointer text-white bg-red-700 text-xs"
                  : "p-1 rounded-sm cursor-pointer text-white bg-red-500 text-xs"
              }
              onClick={() => setStatus("rejected")}
            >
              Rejected
            </div>
          </div>
          <label htmlFor="date" className="flex flex-col">
            Date:
            <input
              type="date"
              id="date"
              className="border-1 border-black p-1"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-teal w-min text-white px-2 py-1 rounded-sm text-sm cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
