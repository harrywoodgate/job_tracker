import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";

export default function PasswordReset({
  passwordVerified,
}: {
  passwordVerified: boolean;
}) {
  const { settingsDispatch } = useOutletContext<outletContext>();

  return (
    <div className={passwordVerified ? "flex flex-col gap-y-2 mt-2" : "hidden"}>
      <label htmlFor="new_password" className="text-xs sm:text-sm">
        New Password
      </label>
      <div className="relative">
        <input
          type="password"
          placeholder="Enter new password here"
          className="rounded-md p-2 text-xs border-1 border-gray-200 w-full"
          onChange={(e) =>
            settingsDispatch({
              setting: "new_password",
              value: e.target.value,
            })
          }
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px] absolute right-3 fill-gray top-1/4"
        >
          <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
        </svg>
      </div>
      <div className="relative mt-2">
        <input
          type="password"
          placeholder="Confirm new password"
          className="rounded-md p-2 text-xs border-1 border-gray-200 w-full"
          onChange={(e) =>
            settingsDispatch({
              setting: "confirm_password",
              value: e.target.value,
            })
          }
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[15px] absolute right-3 fill-gray top-1/4"
        >
          <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
        </svg>
      </div>
    </div>
  );
}
