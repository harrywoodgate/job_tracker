export default function ApplicationsColumn({
  heading,
  colourIndex,
  count,
}: {
  heading: string;
  colourIndex: number;
  count?: number;
}) {

const colours = ["bg-blue-500", "bg-teal", "bg-yellow-500", "bg-green-500", "bg-red-500"]

  return (
    <div className="border-2 border-gray-200 rounded-md px-2 py-4 grid grid-rows-[auto_1fr_auto] gap-y-4">
      <div className="flex flex-col gap-y-4 items-center">
        <div className="flex justify-between w-full items-center px-2">
          <div className="flex items-center gap-x-2">
            <div
              className={`rounded-full ${colours[colourIndex]} h-[8px] w-[8px]`}
            ></div>
            <h2 className="font-medium text-sm">{heading}</h2>
          </div>
          <p className="bg-gray-200 font-medium rounded-lg px-2 py-1 text-xs flex items-center">
            {count ? count : 0}
          </p>
        </div>
        <div className="h-[2px] bg-gray-200 w-[90%]"></div>
      </div>
      <div></div>
      <div className="flex justify-center gap-x-1 cursor-pointer text-sm text-gray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-gray w-[20px]"
        >
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>Add</span>
      </div>
    </div>
  );
}
