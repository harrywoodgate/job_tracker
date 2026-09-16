import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsColumn from "./ApplicationsColumn";
import NewApplicationForm from "./NewApplicationForm";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import type { application } from "../../../types/application";
import type { applicationStatus } from "../../../types/applicationStatus";

export default function Applications() {
  const [formActive, setFormActive] = useState(false);
  const [status, setStatus] = useState("applied");

  const { applicationHistory } = useOutletContext<outletContext>();


  let applications: Record<applicationStatus, application[]> = {
    applied: [],
    response: [],
    interview: [],
    offer: [],
    rejected: [],
  };

  applicationHistory.map((application) => {
    const currentStatus = application.current_status as applicationStatus;
    applications[currentStatus].push(application);
  });

  return (
    <div className="p-6 h-full flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col gap-y-8">
        <ApplicationsHeader
          setFormActive={setFormActive}
          setStatus={setStatus}
        />
        <div className="grid grid-cols-5 gap-x-2">
          <ApplicationsColumn
            heading="Applied"
            colourIndex={0}
            setStatus={setStatus}
            setFormActive={setFormActive}
            applications={applications.applied}
          />
          <ApplicationsColumn
            heading="Response"
            colourIndex={1}
            setStatus={setStatus}
            setFormActive={setFormActive}
            applications={applications.response}
          />
          <ApplicationsColumn
            heading="Interview"
            colourIndex={2}
            setStatus={setStatus}
            setFormActive={setFormActive}
            applications={applications.interview}
          />
          <ApplicationsColumn
            heading="Offer"
            colourIndex={3}
            setStatus={setStatus}
            setFormActive={setFormActive}
            applications={applications.offer}
          />
          <ApplicationsColumn
            heading="Rejected"
            colourIndex={4}
            setStatus={setStatus}
            setFormActive={setFormActive}
            applications={applications.rejected}
          />
        </div>
      </div>
      <NewApplicationForm
        active={formActive}
        setActive={setFormActive}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}
