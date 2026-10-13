import { useState } from "react";
import PasswordReset from "./PasswordReset";
import useVerifyPassword from "../../../hooks/useVerifyPassword";
import saveSettings from "../../../utils/saveSettings";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../types/outletContext";
import AccountDetailsInput from "./AccountDetailsInput";

export default function AccountDetails() {
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { user, settingsDispatch } = useOutletContext<outletContext>();
  const {
    passwordVerified,
    setPasswordVerified,
    verificationError,
    verifyPassword,
  } = useVerifyPassword();
  const svgStyling = "w-[15px] absolute right-3 fill-gray top-1/4";

  return (
    <div className="bg-white w-[60%] rounded-md shadow-sm p-4">
      <h3 className="font-bold text-lg">Account Details</h3>
      <p className="text-sm text-gray mb-4">
        These are the details used for your job tracker account
      </p>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (user.new_password !== user.confirm_password) {
            setPasswordErrorMessage("Passwords don't match!");
            return;
          }
          saveSettings(user);
          setPasswordErrorMessage("");
          setPasswordVerified(false);
          settingsDispatch({ setting: "reset_passwords" });
          user.new_email !== user.current_email
            ? setShowEmailMessage(true)
            : "";
        }}
      >
        <AccountDetailsInput
          label="Display Name"
          placeholder="Enter display name here"
          dispatchSetting="display_name"
          value={user.display_name}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={svgStyling}
            >
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
            </svg>
          }
        />
        <AccountDetailsInput
          label="Email"
          placeholder="example123@email.com"
          dispatchSetting="email"
          value={user.new_email}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={svgStyling}
            >
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
          }
        />
        <p
          className={
            showEmailMessage ? "text-xs text-gray italic mt-2" : "hidden"
          }
        >
          Check inbox to confirm new email
        </p>
        {!passwordVerified && (
          <>
            <label htmlFor="current_password" className="text-sm">
              Current Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="rounded-md w-full p-2 text-xs border-1 border-gray-200"
                placeholder="Enter current password to reset password"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={svgStyling}
              >
                <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
              </svg>
            </div>
          </>
        )}
        {verificationError && (
          <p className="text-xs text-gray italic mt-2">{verificationError}</p>
        )}
        <PasswordReset passwordVerified={passwordVerified} />
        {passwordErrorMessage && (
          <p className="text-xs text-gray italic mt-2">
            {passwordErrorMessage}
          </p>
        )}
        <div
          className={
            passwordVerified
              ? "flex justify-end mt-4"
              : "flex justify-between mt-4"
          }
        >
          <button
            className={
              passwordVerified
                ? "hidden"
                : "text-xs bg-white rounded-md p-2 cursor-pointer border-1 border-gray-200 flex items-center gap-x-2"
            }
            onClick={(e) => {
              e.preventDefault();
              verifyPassword(user.current_email, currentPassword);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[16px]"
            >
              <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z" />
            </svg>
            Reset Password
          </button>
          <button
            type="submit"
            className="w-min bg-teal px-6 py-2 font-medium text-white text-xs rounded-md cursor-pointer flex items-center gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[16px] fill-white"
            >
              <path d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
            </svg>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
