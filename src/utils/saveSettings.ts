import type { user } from "../types/user";
import { supabase } from "../supabaseClient";

export default async function saveSettings(user: user) {
  const { error } = await supabase.auth.updateUser({
    email: user.new_email,
    password: user.new_password,
    data: {
      display_name: user.display_name,
    },
  });
  if (error) {
    console.error(error)
  }
}
