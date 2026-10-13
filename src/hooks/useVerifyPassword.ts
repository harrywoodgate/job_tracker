import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function useVerifyPassword() {
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const verifyPassword = async (email: string, currentPassword: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: currentPassword,
    });

    if (error) {
      setVerificationError("Current password is incorrect");
    } else {
      setPasswordVerified(true);
      setVerificationError("");
    }
  };

  return {
    passwordVerified,
    setPasswordVerified,
    verificationError,
    verifyPassword,
  };
}
