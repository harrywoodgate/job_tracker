import NavLink from "./NavLink";
import logo from "../../../img/logo.png";

export default function NavSidebar({mobileNavActive, setMobileNavActive} : {
  mobileNavActive: boolean;
  setMobileNavActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const svgStyling: string = "fill-white w-[25px] pt-[1px]";

  return (
    <>
    <div
        onClick={() => setMobileNavActive(false)}
        className={
          mobileNavActive
            ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-1 flex justify-center items-center"
            : "hidden"
        }
      ></div>
      <div
        className={
          mobileNavActive
            ? "flex flex-col absolute left-0 top-0 h-[100svh] w-[240px] animate-nav-slide-in z-1 bg-primary-blue px-2 py-8"
            : "hidden lg:flex flex-col gap-y-1"
        }
      >
        <div className="flex gap-x-3 items-center pl-3 mb-4">
          <img src={logo} alt="logo" className="w-[25px]" />
          <h2 className="font-bold text-lg">JobTracker</h2>
        </div>
        <NavLink
          linkUrl="userDashboard"
          linkText="Dashboard"
          setMobileNavActive={setMobileNavActive}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={svgStyling}
            >
              <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
            </svg>
          }
        />
        <NavLink
          linkUrl="applications"
          linkText="Applications"
          setMobileNavActive={setMobileNavActive}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={svgStyling}
            >
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
            </svg>
          }
        />
        <div className="h-[2px] bg-[#1f385f] bg-opacity-5 rounded-md mx-2 my-4"></div>
        <NavLink
          linkUrl="settings"
          linkText="Settings"
          setMobileNavActive={setMobileNavActive}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={svgStyling}
            >
              <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
            </svg>
          }
        />
      </div>
      </>
  );
}
