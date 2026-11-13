import UDTRRecentActivity from "./UDTRRecentActivity";
import UDTRUpcomingReminders from "./UDTRUpcomingReminders";

export default function UDThirdRow() {
  return (
    <div className="xl:grid grid-cols-[45%_55%] gap-x-4 flex flex-col gap-y-4">
      <UDTRRecentActivity />
      <UDTRUpcomingReminders />
    </div>
  );
}
