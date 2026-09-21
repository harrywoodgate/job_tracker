import { supabase } from "../supabaseClient";
import type { application } from "../types/application";
import uploadApplication from "../utils/uploadApplication";
import { useState, useEffect } from "react";
import removeApplicationRow from "../utils/removeApplicationRow";

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
      console.error(error);
      return;
    }
    setApplicationHistory((prev) => [...prev, application]);
  };

  const deleteApplication = async (application: application) => {
    const error =  await removeApplicationRow(application);
    if (error) {
      alert(error);
      console.error(error)
      return
    }
    setApplicationHistory((prev) =>
      prev.filter((app) => app.id !== application.id),
    );
  };

  // const updateApplication = (application: application) => {
    
  // }

  return { addApplication, applicationHistory, deleteApplication };
}
