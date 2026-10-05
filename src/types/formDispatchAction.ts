import type { application } from "./application";
import type { applicationStatus } from "./applicationStatus";

export type formDispatchAction =
  | { type: "id"; value: string }
  | { type: "current_status"; value: applicationStatus }
  | { type: "job_title"; value: string }
  | { type: "company"; value: string }
  | { type: "job_type"; value: string }
  | { type: "resetForm" }
  | {type: "date"; value: string; status: string}
  | {type: "editApplication"; value: application};
