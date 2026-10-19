import { Link } from "react-router";
import logo from "../../img/logo.png"

export default function HomepageHeader() {
  return (
    <div className="flex p-4 sm:p-6 items-center justify-between">
      <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="sm:w-[30px] w-[25px]" />
          <h1 className="sm:text-xl font-semibold">Job Tracker</h1>
      </div>
      <div className="flex items-center gap-x-4 sm:gap-x-6">
          <Link to="login" className="sm:text-sm text-xs">Log in</Link>
          <Link to="signup" className="bg-teal sm:text-sm text-xs text-white py-1.5 sm:px-4 px-2 rounded-md">Sign up <span className="hidden sm:inline">free</span></Link>
      </div>
    </div>
  );
}
