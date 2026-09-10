import type { application } from "../types/application";
import uploadApplication from "../utils/uploadApplication";
import { useState } from "react";

export default function useManageApplications() {
  const [applicationHistory, setApplicationHistory] = useState<application[]>(
    [],
  );

  const addApplication = async (
    e: React.SubmitEvent<HTMLFormElement>,
    application: application,
  ) => {
    e.preventDefault();

    const error = await uploadApplication(application);
    if (error) {
      console.error(error);
      return;
    }
    setApplicationHistory((prev) => [...prev, application]);
  };

  return { addApplication, applicationHistory };
}
