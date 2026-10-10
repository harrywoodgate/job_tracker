import type { outletContext } from "../../../types/outletContext";
import { useOutletContext } from "react-router";

export default function SettingsInput() {

    const {user, settingsDispatch} = useOutletContext<outletContext>()

  return (
    <div className="flex flex-col">
      <label htmlFor="display_name" className="text-sm font-medium mb-1">
        Display Name
      </label>
      <input
        type="text"
        placeholder="Enter display name here"
        className="bg-white rounded-sm py-1 px-2 w-[30%] text-sm"
        value={user.display_name}
        onChange={(e) =>
          settingsDispatch({
            setting: "display_name",
            value: e.target.value,
          })
        }
      />
    </div>
  );
}
