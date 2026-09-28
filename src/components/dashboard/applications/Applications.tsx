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
  const [formType, setFormType] = useState("new");
  const { formApplication, dispatch } = useManageFormInfo();
  const [mobileColumnActive, setMobileColumnActive] = useState("");
  const [draggedTile, setDraggedTile] = useState<null | application>(null);

  const { applicationHistory, updateApplication } =
    useOutletContext<outletContext>();

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

  //dont know if its worth putting this is a seperate file
  function handleDrop(newStatus: applicationStatus) {
    let application: application;
    if (draggedTile) {
      application = draggedTile;
    }
    applicationHistory.map((app) => {
      if (app.id === application.id) {
        if (app[newStatus] != null) {
          application.current_status = newStatus;
          updateApplication(application);
        } else {
          application.current_status = newStatus;
          setFormType("edit");
          dispatch({ type: "editApplication", value: application });
          setFormActive(true);
        }
      }
    });
  }

  return (
    <div className="p-6 h-full flex justify-center lg:col-span-1 col-span-2">
      <div className="w-full max-w-[1500px] flex flex-col gap-y-8">
        <ApplicationsHeader
          setFormActive={setFormActive}
          setFormType={setFormType}
          dispatch={dispatch}
        />
        <ApplicationsContext
          value={{ setFormActive, dispatch, setFormType, setDraggedTile }}
        >
          <div className="flex flex-col md:grid grid-cols-5 gap-x-2 gap-y-2">
            <ApplicationsColumn
              handleDrop={handleDrop}
              setMobileColumnActive={setMobileColumnActive}
              mobileColumnActive={mobileColumnActive}
              heading="Applied"
              colourIndex={0}
              applications={applications.applied}
            />
            <ApplicationsColumn
              handleDrop={handleDrop}
              setMobileColumnActive={setMobileColumnActive}
              mobileColumnActive={mobileColumnActive}
              heading="Response"
              colourIndex={1}
              applications={applications.response}
            />
            <ApplicationsColumn
              handleDrop={handleDrop}
              setMobileColumnActive={setMobileColumnActive}
              mobileColumnActive={mobileColumnActive}
              heading="Interview"
              colourIndex={2}
              applications={applications.interview}
            />
            <ApplicationsColumn
              handleDrop={handleDrop}
              setMobileColumnActive={setMobileColumnActive}
              mobileColumnActive={mobileColumnActive}
              heading="Offer"
              colourIndex={3}
              applications={applications.offer}
            />
            <ApplicationsColumn
              handleDrop={handleDrop}
              setMobileColumnActive={setMobileColumnActive}
              mobileColumnActive={mobileColumnActive}
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
        formType={formType}
      />
    </div>
  );
}
