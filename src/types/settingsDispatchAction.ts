import type { user } from "./user";

export type settingsDispatchAction =
  | { setting: "new user"; value: user }
  | { setting: setting; value: string }
  | { setting: "reset_passwords" };

type setting = "display_name" | "email" | "new_password" | "confirm_password";
