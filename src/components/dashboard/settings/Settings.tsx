import saveSettings from "../../../utils/saveSettings";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import SettingsInput from "./SettingsInput";
import { useState } from "react";

export default function Settings() {
  const [showEmailMessage, setShowEmailMessage] = useState(false)
  const { user } = useOutletContext<outletContext>();

  return (
    <div className="p-6 min-h-svh flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col">
        <h2 className="font-semibold text-lg md:text-2xl">Settings</h2>
        <p className="text-gray text-xs md:text-sm mt-1">
          Manage your settings here
        </p>
        <div className="flex flex-col mt-4">
          <form
            className="flex flex-col gap-y-2"
            onSubmit={(e) => {
              e.preventDefault();
              saveSettings(user);
              user.new_email !== user.current_email ? setShowEmailMessage(true) : "";
            }}
          >
            <SettingsInput
              label="Display Name"
              placeholder="Enter display name here"
              dispatchSetting="display_name"
              value={user.display_name}
            />
            <SettingsInput
              label="Email"
              placeholder=""
              dispatchSetting="email"
              value={user.new_email}
            />
            <p className={showEmailMessage ? "text-sm" : "hidden"}>Check inbox to confirm new email</p>
            <button
              type="submit"
              className="w-min bg-teal text-white text-sm px-2 py-1 rounded-sm cursor-pointer"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
