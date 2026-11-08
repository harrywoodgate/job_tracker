import SignupCard from "./SignupCard";
import logo from "../../img/logo.png";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex flex-col p-6 bg-[linear-gradient(143deg,rgba(1,53,130,100)_0%,rgba(2,44,107,1)_10%,rgba(1,30,74,1)_50%,rgba(2,44,107,1)_90%,rgba(1,53,130,100)_100%)] text-white">
      <div className="flex gap-x-2 items-center">
        <img src={logo} alt="logo" className="w-[35px] h-[35px]" />
        <h1 className="text-3xl font-semibold">Job Tracker</h1>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl font-semibold">Welcome!</h2>
          <p className="mt-2 text-xl">
            Create your account to start your career journey today
          </p>
        </div>
        <SignupCard />
      </div>
    </div>
  );
}
