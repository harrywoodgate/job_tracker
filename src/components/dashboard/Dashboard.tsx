import Nav from "./nav/Nav.tsx";
import { Outlet } from "react-router";
import useManageApplications from "../../hooks/useManageApplications.ts";

export default function Dashboard() {
  const { applicationHistory, addApplication, deleteApplication, updateApplication } = useManageApplications();

  return (
    <div className="grid grid-cols-[auto_1fr] bg-gray-100">
      <Nav />
      <Outlet context={{ applicationHistory, addApplication, deleteApplication, updateApplication }} />
    </div>
  );
}
