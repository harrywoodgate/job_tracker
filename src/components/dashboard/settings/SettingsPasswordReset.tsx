import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import { useState } from "react";

export default function SettingsPasswordReset({
  active,
  passwordVerified,
  verificationError,
  verifyPassword,
}: {
  active: boolean;
  passwordVerified: boolean;
  verificationError: string;
  verifyPassword: (email: string, currentPassword: string) => Promise<void>
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const { user, settingsDispatch } = useOutletContext<outletContext>();

  return (
    <div className={active ? "flex flex-col gap-y-2" : "hidden"}>
      <label htmlFor="current_password" className="text-sm font-medium">
        Current Password
      </label>
      <input
        type="password"
        className="bg-white rounded-sm text-sm py-1 px-2"
        placeholder="Enter current password here"
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <button
        className={
          passwordVerified
            ? "hidden"
            : "bg-white w-min text-sm px-2 py-1 rounded-md shadow-sm cursor-pointer"
        }
        onClick={(e) => {
          e.preventDefault();
          verifyPassword(user.current_email, currentPassword);
        }}
      >
        Verify
      </button>
      {passwordVerified && (
        <>
          <input
            type="password"
            placeholder="Enter new password here"
            className="bg-white rounded-sm text-sm py-1 px-2 mt-2"
            onChange={(e) =>
              settingsDispatch({
                setting: "new_password",
                value: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="bg-white rounded-sm text-sm py-1 px-2 mt-2"
            onChange={(e) =>
              settingsDispatch({
                setting: "confirm_password",
                value: e.target.value,
              })
            }
          />
        </>
      )}
      {verificationError && <p>{verificationError}</p>}
    </div>
  );
}
