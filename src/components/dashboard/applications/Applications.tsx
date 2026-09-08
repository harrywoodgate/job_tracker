import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsColumn from "./ApplicationsColumn";

export default function Applications() {
  return (
    <div className="p-6 h-full flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col gap-y-8">
        <ApplicationsHeader />
        <div className="grid grid-cols-5 h-[400px] gap-x-2">
          <ApplicationsColumn heading="Applied" colourIndex={0} />
          <ApplicationsColumn heading="Response" colourIndex={1} />
          <ApplicationsColumn heading="Interview" colourIndex={2} />
          <ApplicationsColumn heading="Offer" colourIndex={3} />
          <ApplicationsColumn heading="Rejected" colourIndex={4} />
        </div>
      </div>
    </div>
  );
}
