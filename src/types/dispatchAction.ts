export type dispatchAction =
  | { type: "status"; value: string }
  | { type: "jobTitle"; value: string }
  | { type: "company"; value: string }
  | { type: "jobType"; value: string }
  | { type: "date"; value: string }
  | { type: "resetForm" };
