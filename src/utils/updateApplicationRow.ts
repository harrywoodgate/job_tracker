import type { application } from "../types/application";
import { supabase } from "../supabaseClient";

export default async function updateApplicationRow(application: application) {
  const { error } = await supabase
    .from("job_applications")
    .update({
      job_title: application.job_title,
      company: application.company,
      job_type: application.job_type,
      applied: application.applied,
      response: application.response,
      interview: application.interview,
      offer: application.offer,
      rejected: application.rejected,
    })
    .eq("id", application.id);

  if (error) {
    return error;
  }
}
