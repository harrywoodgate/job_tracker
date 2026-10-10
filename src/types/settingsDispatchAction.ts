import type { user } from "./user";

export type settingsDispatchAction =
  | { setting: "new user"; value: user }
  | { setting: "display_name"; value: string }
  | { setting: "email"; value: string }
