import { useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router";
import googleLogo from "../../img/google_logo.png"

export default function LoginCard() {
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

  async function loginWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard/userDashboard`,
      },
    });

    if (error) {
      console.error("Google login failed:", error.message);
    }
  }

  return (
    <div className="flex items-center w-full mt-6 md:mt-0 md:w-[45%] lg:w-[40%]">
      <div className="bg-white lg:px-8 px-6 lg:py-10 py-6 text-black rounded-lg flex flex-col items-center gap-y-2 w-full">
        <h1 className="lg:text-2xl text-lg font-semibold">Sign in to your account</h1>
        <p className="lg:text-sm text-xs">
          Dont have an account?
          <Link to="/signup" className="text-teal ml-1 cursor-pointer">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-y-2 w-full">
          <div className="flex flex-col">
            <label htmlFor="email" className="lg:text-sm text-xs mb-1">
              Email address
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[20px] fill-gray absolute left-3 top-2.5"
              >
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
              </svg>
              <input
                type="text"
                className="border-2 border-gray-200 rounded-md py-2 px-2 pl-10 w-full lg:text-sm text-xs"
                placeholder="you@example.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="lg:text-sm text-xs mb-1">
              Password
            </label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[20px] fill-gray absolute left-3 top-2.5"
              >
                <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
              </svg>
              <input
                type="password"
                className="border-2 border-gray-200 rounded-md py-2 px-2 pl-10 w-full lg:text-sm text-xs"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p>{error}</p>}
          <div className="w-full h-[2px] bg-gray-200 my-4"></div>
          <button
            type="submit"
            className="cursor-pointer bg-teal text-sm lg:text-md text-white rounded-md py-2"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray">or</p>
        <button onClick={loginWithGoogle} className="w-full text-sm lg:text-md flex items-center justify-center gap-x-3 border-1 border-black rounded-md p-2 cursor-pointer"> <img src={googleLogo} alt="" className="w-[20px] h-[20px]"/> Sign in with Google</button>
        <p className="text-xs text-gray text-center mt-4">
          By signing in you agree to our{" "}
          <span className="text-teal font-medium">Terms of Service</span>
          <br /> and{" "}
          <span className="text-teal font-medium">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
