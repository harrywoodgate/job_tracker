import type { ReactElement } from "react";
import type { outletContext } from "../../../types/outletContext";
import { useOutletContext } from "react-router";

export default function AccountDetailsInput({
  label,
  placeholder,
  dispatchSetting,
  value,
  svg,
}: {
  label: string;
  placeholder: string;
  dispatchSetting: "display_name" | "email";
  value: string;
  svg: ReactElement;
}) {
  const { settingsDispatch } = useOutletContext<outletContext>();

  return (
    <div className="flex flex-col">
      <label htmlFor="display_name" className="text-sm mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="rounded-md p-2 text-xs border-1 border-gray-200 w-full"
          value={value}
          onChange={(e) =>
            settingsDispatch({
              setting: dispatchSetting,
              value: e.target.value,
            })
          }
        />
        {svg}
      </div>
    </div>
  );
}
