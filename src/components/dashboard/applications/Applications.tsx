import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsColumn from "./ApplicationsColumn";
import NewApplicationForm from "./NewApplicationForm";
import { useState } from "react";

export default function Applications() {
  const [formActive, setFormActive] = useState(false);
  const [status, setStatus] = useState("applied");

  return (
    <div className="p-6 h-full flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col gap-y-8">
        <ApplicationsHeader
          setFormActive={setFormActive}
          setStatus={setStatus}
        />
        <div className="grid grid-cols-5 h-[400px] gap-x-2">
          <ApplicationsColumn
            heading="Applied"
            colourIndex={0}
            setStatus={setStatus}
            setFormActive={setFormActive}
          />
          <ApplicationsColumn
            heading="Response"
            colourIndex={1}
            setStatus={setStatus}
            setFormActive={setFormActive}
          />
          <ApplicationsColumn
            heading="Interview"
            colourIndex={2}
            setStatus={setStatus}
            setFormActive={setFormActive}
          />
          <ApplicationsColumn
            heading="Offer"
            colourIndex={3}
            setStatus={setStatus}
            setFormActive={setFormActive}
          />
          <ApplicationsColumn
            heading="Rejected"
            colourIndex={4}
            setStatus={setStatus}
            setFormActive={setFormActive}
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
