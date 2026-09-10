import { supabase } from "../supabaseClient";
import type { application } from "../types/application.ts";

export default async function uploadApplication(
  application: application,
) {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return ("No current user");
  const { error } = await supabase.from("job_applications").insert({
    user_id: user.id,
    job_title: application.title,
    company: application.company,
    job_type: application.type,
    applied: application.applied,
    response: application.response,
    interview: application.interview,
    offer: application.offer,
    rejected: application.rejected,
    current_status: application.status,
  });

  if (error) {
    return (error)
  }
}
