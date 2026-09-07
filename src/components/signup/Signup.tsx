import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmPassword !== password) {
      setError("Passwords do not match!");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) return setError(error.message);
    navigate("/dashboard");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-y-2">
      <h1 className="text-xl">Signup</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-y-2">
        <input
          type="text"
          className="border-2 border-black"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border-2 border-black"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="border-2 border-black"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="cursor-pointer">
          Create Account
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
