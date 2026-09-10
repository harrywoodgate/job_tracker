import { supabase } from "../supabaseClient";

type application = {
  title: string;
  company: string;
  status: string;
  type?: string;
  applied?: string;
  response?: string;
  interview?: string;
  offer?: string;
  rejected?: string;
};

export default function useManageApplications() {
  const addApplication = async (e: React.SubmitEvent<HTMLFormElement>, application: application) => {
    e.preventDefault()
    console.log(application)
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;
    const { error } = await supabase.from('job_applications').insert({
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
      console.error(error);
    }
  };

  return { addApplication };
}
