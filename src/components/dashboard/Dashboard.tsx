import Nav from "./nav/Nav.tsx";
import { Outlet } from "react-router";
import useManageApplications from "../../hooks/useManageApplications.ts";
import useEditSettings from "../../hooks/useEditSettings.ts";
import { NavContext } from "../../contexts/navContext.ts";

export default function Dashboard() {
  const {
    applicationHistory,
    addApplication,
    deleteApplication,
    updateApplication,
  } = useManageApplications();
  const { user, settingsDispatch } = useEditSettings();

  return (
    <div className="sm:grid grid-cols-[auto_1fr] bg-gray-100">
      <NavContext value={{user}}>
      <Nav/>
      </NavContext>
      <Outlet
        context={{
          applicationHistory,
          addApplication,
          deleteApplication,
          updateApplication,
          user,
          settingsDispatch,
        }}
      />
    </div>
  );
}
