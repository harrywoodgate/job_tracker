import SignupCard from "./SignupCard";
import logo from "../../img/logo.png";

export default function Signup() {
  return (
    <div className="w-screen h-screen flex flex-col p-6 bg-primary-blue text-white">
      <div className="flex gap-x-2 items-center">
        <img src={logo} alt="logo" className="w-[35px] h-[35px]" />
        <h1 className="text-3xl font-semibold">Job Tracker</h1>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">Welcome!</h2>
          <p className="text-sm">
            Create your account to start your career journey today
          </p>
        </div>
        <SignupCard />
      </div>
    </div>
  );
}
