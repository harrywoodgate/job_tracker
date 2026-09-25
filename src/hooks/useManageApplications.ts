import { supabase } from "../supabaseClient";
import type { application } from "../types/application";
import uploadApplication from "../utils/uploadApplication";
import { useState, useEffect } from "react";
import removeApplicationRow from "../utils/removeApplicationRow";
import updateApplicationRow from "../utils/updateApplicationRow";

export default function useManageApplications() {
  const [applicationHistory, setApplicationHistory] = useState<application[]>(
    [],
  );

  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("job_applications")
        .select("*");
      if (error || !data) {
        console.error(error);
        return;
      }
      if (!data) {
        return;
      }
      setApplicationHistory(data);
    };
    fetchHistory();
  }, []);

  const addApplication = async (
    e: React.SubmitEvent<HTMLFormElement>,
    application: application,
  ) => {
    e.preventDefault();

    const error = await uploadApplication(application);
    if (error) {
      alert(`An error ${error} has occured please try again`);
      console.error(error);
      return;
    }
    setApplicationHistory((prev) => [...prev, application]);
  };

  const deleteApplication = async (application: application) => {
    const error = await removeApplicationRow(application);
    if (error) {
      alert(`An error ${error} has occured please try again`);
      console.error(error);
      return;
    }
    setApplicationHistory((prev) =>
      prev.filter((app) => app.id !== application.id),
    );
  };

  const updateApplication = async (application: application) => {
    const error = await updateApplicationRow(application);
    if (error) {
      alert(`An error ${error} has occured please try again`);
      console.error(error);
      return;
    }
    setApplicationHistory((prev) =>
      prev.map((app) => (app.id === application.id ? application : app)),
    );
  };

  return {
    addApplication,
    applicationHistory,
    deleteApplication,
    updateApplication,
  };
}
