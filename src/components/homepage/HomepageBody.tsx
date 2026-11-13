import { Link } from "react-router";
import screenshot from "../../img/dashboard_screenshot.png";

export default function HomepageBody() {
  return (
    <main className="lg:grid grid-cols-[45%_55%] p-4 sm:p-6">
      <div className="flex flex-col gap-y-2 sm:gap-y-4">
        <div className="bg-sky-100 flex items-center gap-x-2 w-fit p-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="sm:w-[20px] w-[15px] fill-blue-700"
          >
            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
          </svg>
          <p className="sm:text-xs text-[10px] text-blue-700 font-semibold">Your job search, organised.</p>
        </div>
        <h1 className="sm:text-5xl text-2xl font-semibold leading-tight">
          Track applications.
          <br /> Stay organised. <br />
          Land your <span className="text-blue-700">dream job.</span>
        </h1>
        <p className="text-gray text-xs">
          Job Tracker helps you manage every application,
          <br /> follow up with confidence, and never miss an <br />{" "}
          opportunity.
        </p>
        <Link
          to="signup"
          className="bg-teal mt-2 w-fit text-white py-3 px-4 rounded-md text-xs sm:text-sm"
        >
          Get started for free
        </Link>
        <div className="sm:text-xs text-[10px] mt-2 text-gray flex gap-x-4 row-start-2 col-end-3">
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="sm:w-[22px] w-[18px] fill-gray"
            >
              <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9" />
            </svg>
            <p>
              100% free to get started <br /> No credit card required
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="sm:w-[22px] w-[18px] fill-gray"
            >
              <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
            </svg>
            <p>
              Your data is secured <br /> Private and encrypted
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[22px] fill-gray"
            >
              <path d="M11 15H6L13 1V9H18L11 23V15Z" />
            </svg>
            <p>
              Quick and easy setup <br /> Start in under a minute
            </p>
          </div>
        </div>
      </div>
      <img
        src={screenshot}
        alt="dashboard_screenshot"
        className="xl:h-full h-[60%] rounded-md shadow-lg hidden lg:block self-start"
      />
    </main>
  );
}
