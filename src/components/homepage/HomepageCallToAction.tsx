import { Link } from "react-router";

export default function HomepageCallToAction() {
  return (
    <div className="mx-[5%] hidden lg:flex rounded-lg mt-2 bg-primary-blue text-white p-6 items-center justify-center gap-x-10">
      <div className="flex flex-col gap-y-1">
        <p className="text-xl font-semibold">
          Ready to take control of your job search?
        </p>
        <p>
          Keep your applications organised, track your progress and never miss
          an opportunity.
        </p>
      </div>
      <Link
        to="signup"
        className="bg-teal w-fit h-fit flex gap-x-2 items-center text-white px-4 py-3 font-semibold rounded-lg text-xs sm:text-base"
      >
        Get started for free
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-white w-[25px]"
        >
          <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
        </svg>
      </Link>
    </div>
  );
}
