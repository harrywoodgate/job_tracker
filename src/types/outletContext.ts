import type { application } from "./application"
import type { user } from "./user";
import type { settingsDispatchAction } from "./settingsDispatchAction";

export type outletContext = {
    applicationHistory: application[];
    addApplication: (e: React.SubmitEvent<HTMLFormElement>, application: application) => Promise<void>;
    deleteApplication: (application: application) => Promise<void>;
    updateApplication: (application: application) => Promise<void>;
    user: user;
    settingsDispatch: React.ActionDispatch<[action: settingsDispatchAction]>;
}