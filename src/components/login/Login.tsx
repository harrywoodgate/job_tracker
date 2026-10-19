import LoginCard from "./LoginCard";
import logo from "../../img/logo.png";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col p-6 bg-primary-blue text-white">
      <div className="flex gap-x-2 items-center">
        <img src={logo} alt="logo" className="w-[35px] h-[35px]" />
        <h1 className="text-3xl font-semibold">Job Tracker</h1>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">Welcome back!</h2>
          <p className="text-sm">
            Sign in to continue tracking your job applications <br /> and career
            progress
          </p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
}
