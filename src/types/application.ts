import type { applicationStatus } from "./applicationStatus";

export type application = {
  id: string;
  user_id? : string;
  job_title: string;
  company: string;
  current_status: applicationStatus;
  job_type?: string;
  applied?: string;
  response?: string;
  interview?: string;
  offer?: string;
  rejected?: string;
};
