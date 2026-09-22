import { use } from "react";
import { ApplicationsContext } from "../contexts/applicationsContext";

export default function useApplicationsContext() {
  const context = use(ApplicationsContext);

  if (!context) {
    throw new Error("Must be used inside ApplicationsContext.Provider");
  }

  return context;
}
