import UDFirstRowTile from "./UDFirstRowTile";

export default function UDFirstRow() {
    const svgStyling = "w-[25px]"

  return (
    <div className="grid grid-cols-4 gap-x-2">
      <UDFirstRowTile
        heading="Applications"
        colourScheme={"blue"}
        count={12}
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${svgStyling} fill-blue-500`} >
            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        }
        comment={<p className="text-sm text-gray"><span className="text-green-700">+3</span> this week</p>}
      />
      <UDFirstRowTile
        heading="Applications"
        colourScheme="blue"
        count={12}
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${svgStyling} fill-blue-500`}>
            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        }
        comment={<p className="text-sm text-gray"><span className="text-green-700">+3</span> this week</p>}
      />
      <UDFirstRowTile
        heading="Applications"
        colourScheme="blue"
        count={12}
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${svgStyling} fill-blue-500`}>
            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        }
        comment={<p className="text-sm text-gray"><span className="text-green-700">+3</span> this week</p>}
      />
      <UDFirstRowTile
        heading="Applications"
        colourScheme="blue"
        count={12}
        svg={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${svgStyling} fill-blue-500`}>
            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        }
        comment={<p className="text-sm text-gray"><span className="text-green-700">+3</span> this week</p>}
      />
    </div>
  );
}
