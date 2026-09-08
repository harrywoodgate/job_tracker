import Nav from "./nav/Nav.tsx";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-gray-100">
      <Nav />
      <Outlet />
    </div>
  );
}
