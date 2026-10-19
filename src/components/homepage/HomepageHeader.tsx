import { Link } from "react-router";
import logo from "../../img/logo.png"

export default function HomepageHeader() {
  return (
    <div className="flex p-6 items-center justify-between">
      <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="w-[30px]" />
          <h1 className="text-xl font-semibold">Job Tracker</h1>
      </div>
      <div className="flex items-center gap-x-6">
          <Link to="login" className="text-sm">Log in</Link>
          <Link to="signup" className="bg-teal text-sm text-white py-1.5 px-4 rounded-md">Sign up free</Link>
      </div>
    </div>
  );
}
