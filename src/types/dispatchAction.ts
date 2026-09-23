import type { application } from "./application";

export type dispatchAction =
  | { type: "id"; value: string }
  | { type: "current_status"; value: string }
  | { type: "job_title"; value: string }
  | { type: "company"; value: string }
  | { type: "job_type"; value: string }
  | { type: "resetForm" }
  | {type: "date"; value: string; status: string}
  | {type: "editApplication"; value: application};
