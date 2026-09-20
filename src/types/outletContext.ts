import type { application } from "./application"

export type outletContext = {
    applicationHistory: application[];
    addApplication: (e: React.SubmitEvent<HTMLFormElement>, application: application) => Promise<void>;
    deleteApplication: (application: application) => Promise<void>;
}