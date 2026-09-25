import logo from "../../../img/logo.png";
import { useState } from "react";
import NavSidebar from "./NavSidebar";

export default function Nav() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <div className="lg:w-[240px] col-span-2 lg:col-auto bg-primary-blue px-2 py-6 md:py-8 text-white lg:min-h-screen flex flex-col gap-y-8">
      <div className="flex lg:hidden justify-between items-center gap-x-3 lg:pl-2 px-4">
        <div className="flex gap-x-3">
          <img src={logo} alt="logo" className="w-[30px]" />
          <h2 className="font-bold text-xl">JobTracker</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-white w-[25px] lg:hidden"
          onClick={() => setMobileNavActive(true)}
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </div>
    <NavSidebar mobileNavActive={mobileNavActive} setMobileNavActive={setMobileNavActive} />
    </div>
  );
}
