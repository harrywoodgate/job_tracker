import LoginCard from "./LoginCard";
import logo from "../../img/logo.png";

export default function Login() {
  return (
    <div className="w-screen min-h-[100svh] flex justify-center p-6 bg-[linear-gradient(143deg,rgba(1,53,130,100)_0%,rgba(2,44,107,1)_10%,rgba(1,30,74,1)_50%,rgba(2,44,107,1)_90%,rgba(1,53,130,100)_100%)] text-white">
      <div className="max-w-[1600px] w-full">
        <div className="flex gap-x-2 items-center">
          <img src={logo} alt="logo" className="w-[35px] h-[35px]" />
          <h1 className="text-3xl font-semibold">Job Tracker</h1>
        </div>
        <div className="flex justify-between h-full">
          <div className="flex-col justify-center hidden md:flex">
            <h2 className="lg:text-6xl text-4xl font-semibold">Welcome <span className="text-[#02CEED]">back!</span></h2>
            <p className="mt-2 lg:text-xl">
              Sign in to continue tracking your job applications <br /> and career
              progress
            </p>
          </div>
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
