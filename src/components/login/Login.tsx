import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setError(error.message);
    navigate("/dashboard/userDashboard");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-y-2">
      <h1 className="text-xl">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-y-2">
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
        <button type="submit" className="cursor-pointer">
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
      <p>
        Dont have an account? Sign up <Link to="/signup" className="text-blue-600 cursor-pointer">here</Link>
      </p>
    </div>
  );
}
