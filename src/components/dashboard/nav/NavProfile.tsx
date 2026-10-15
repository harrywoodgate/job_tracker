import useNavContext from "../../../hooks/useNavContext";
import NavProfileExpanded from "./NavProfileExpanded";
import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";

export default function NavProfile() {
  const [navProfileExpanded, setNavProfileExpanded] = useState(false);
  const { user } = useNavContext();
  const displayName = user.display_name ? user.display_name : "User";
  let firstLetters: string | string[] = [];
  firstLetters = displayName.split(" ");
  firstLetters = firstLetters.map((word) => word.slice(0, 1));
  firstLetters = firstLetters.join("").toUpperCase();
  const { dropDownRef } = useClickOutside(setNavProfileExpanded);

  return (
    <div className="border-1 flex relative justify-between items-center rounded-lg border-[#1f385f] p-2 mx-2">
      <div className="flex items-center gap-x-2">
        <div className="flex justify-center items-center bg-secondary-blue w-[35px] h-[35px] rounded-full">
          <p className="text-xs font-semibold">{firstLetters}</p>
        </div>
        <p className="text-xs">{displayName}</p>
      </div>
      <div ref={dropDownRef}>
        <NavProfileExpanded active={navProfileExpanded} />
      </div>
      <div onClick={() => setNavProfileExpanded(!navProfileExpanded)}>
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
