import type { outletContext } from "../../../types/outletContext";
import { useOutletContext } from "react-router";

export default function SettingsInput({
  label,
  placeholder,
  dispatchSetting,
  value,
}: {
  label: string;
  placeholder: string;
  dispatchSetting: "display_name" | "email";
  value: string
}) {
  const { settingsDispatch } = useOutletContext<outletContext>();

  return (
    <div className="flex flex-col">
      <label htmlFor="display_name" className="text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-white rounded-sm py-1 px-2 w-[30%] text-sm"
        value={value}
        onChange={(e) =>
          settingsDispatch({
            setting: dispatchSetting,
            value: e.target.value,
          })
        }
      />
    </div>
  );
}
