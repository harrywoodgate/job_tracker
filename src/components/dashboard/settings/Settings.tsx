import AccountDetails from "./AccountDetails";

export default function Settings() {
  return (
    <div className="p-6 min-h-svh flex justify-center">
      <div className="w-full max-w-[1500px] flex flex-col items-start">
        <h2 className="font-semibold text-lg md:text-2xl">Settings</h2>
        <p className="text-gray text-xs md:text-sm mt-1">
          Manage your account details and preferences
        </p>
        <div className="flex w-full mt-4">
          <AccountDetails />
        </div>
      </div>
    </div>
  );
}
