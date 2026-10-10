import useGetUser from "../../hooks/useEditSettings";
import saveSettings from "../../utils/saveSettings";

export default function Settings() {
  const inputStyling = "bg-white rounded-sm py-1 px-2 w-[30%] text-sm";
  const { user, settingsDispatch } = useGetUser();

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
            }}
          >
            <div className="flex flex-col">
                <label htmlFor="display_name" className="text-sm font-medium mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  placeholder="Enter display name here"
                  className={inputStyling}
                  value={user.display_name}
                  onChange={(e) =>
                    settingsDispatch({
                      setting: "display_name",
                      value: e.target.value,
                    })
                  }
                />
            </div>
            <button type="submit" className="w-min bg-teal text-white text-sm px-2 py-1 rounded-sm cursor-pointer">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
