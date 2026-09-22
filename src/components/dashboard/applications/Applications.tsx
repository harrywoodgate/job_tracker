import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsColumn from "./ApplicationsColumn";
import ApplicationForm from "./ApplicationForm";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import type { application } from "../../../types/application";
import type { applicationStatus } from "../../../types/applicationStatus";
import useManageFormInfo from "../../../hooks/useManageFormInfo";
import { ApplicationsContext } from "../../../contexts/applicationsContext";

export default function Applications() {
  const [formActive, setFormActive] = useState(false);
  const { formApplication, dispatch } = useManageFormInfo();

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
        <ApplicationsHeader setFormActive={setFormActive} dispatch={dispatch} />
        <ApplicationsContext value={{ setFormActive, dispatch }}>
          <div className="grid grid-cols-5 gap-x-2">
            <ApplicationsColumn
              heading="Applied"
              colourIndex={0}
              applications={applications.applied}
            />
            <ApplicationsColumn
              heading="Response"
              colourIndex={1}
              applications={applications.response}
            />
            <ApplicationsColumn
              heading="Interview"
              colourIndex={2}
              applications={applications.interview}
            />
            <ApplicationsColumn
              heading="Offer"
              colourIndex={3}
              applications={applications.offer}
            />
            <ApplicationsColumn
              heading="Rejected"
              colourIndex={4}
              applications={applications.rejected}
            />
          </div>
        </ApplicationsContext>
      </div>
      <ApplicationForm
        active={formActive}
        setActive={setFormActive}
        application={formApplication}
        dispatch={dispatch}
      />
    </div>
  );
}
