import { supabase } from "../supabaseClient";
import type { application } from "../types/application";

export default async function removeApplicationRow(application: application) {
  console.log(application)
  const { error } = await supabase
    .from('job_applications')
    .delete()
    .eq('id', application.id);
  if (error) {
    return (error)
  }
}
