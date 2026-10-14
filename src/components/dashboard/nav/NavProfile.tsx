import { use } from "react";
import { NavContext } from "../../../contexts/navContext";

export default function NavProfile() {
  const context = use(NavContext);

  return (
    <div className="border-1 flex justify-between items-center rounded-lg border-[#1f385f] p-2 mx-2">
      <div className="flex items-center gap-x-2">
        <div className="flex justify-center items-center bg-secondary-blue w-[35px] h-[35px] rounded-full">
          <p className="text-xs font-semibold">HW</p>
        </div>
        <p className="text-xs">
          {context?.user.display_name ? context.user.display_name : "User"}
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[20px] fill-white cursor-pointer"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
    </div>
  );
}
