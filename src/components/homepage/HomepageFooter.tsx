export default function HomepageFooter() {
  return (
    <div className="bg-white p-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold">
        Everything you need to take control of your job search
      </h2>
      <div className="flex mt-4 gap-x-6 pb-4">
        <div className="flex items-center gap-x-4">
          <div className="bg-sky-100 w-fit h-fit p-2 flex items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[30px] fill-blue-700"
            >
              <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Track Everything</p>
            <p className="text-xs text-gray">
              Keep all your applications, contacts <br /> and notes in one
              place.
            </p>
          </div>
        </div>
        <div className="w-[2px] self-stretch bg-gray-100"></div>
        <div className="flex items-center gap-x-4">
          <div className="bg-emerald-100 w-fit h-fit p-2 flex items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[30px] fill-emerald-500"
            >
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M9 13V19H7V13H9M15 15V19H17V15H15M11 11V19H13V11H11Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Stay Organised</p>
            <p className="text-xs text-gray">
              Visual boards and filters help you <br /> see what needs your
              attention place.
            </p>
          </div>
        </div>
        <div className="w-[2px] self-stretch bg-gray-100"></div>
        <div className="flex items-center gap-x-4">
          <div className="bg-orange-100 w-fit h-fit p-2 flex items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[30px] fill-orange-500"
            >
              <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Get Insights</p>
            <p className="text-xs text-gray">
              Powerful analytics show your progress <br /> and help you improve
              attention place.
            </p>
          </div>
        </div>
        <div className="w-[2px] self-stretch bg-gray-100"></div>
        <div className="flex items-center gap-x-4">
          <div className="bg-indigo-100 w-fit h-fit p-2 flex items-center rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[30px] fill-indigo-700"
            >
              <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium">Never Miss a Follow Up</p>
            <p className="text-xs text-gray">
              Reminders and notifications keep <br /> you on top of every
              opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
