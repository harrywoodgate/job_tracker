import type { ReactElement } from "react";

export default function UDFirstRowTile({
  heading,
  count,
  svg,
  comment,
  colourScheme,
}: {
  heading: string;
  count: number;
  svg: ReactElement;
  comment: ReactElement
  colourScheme: "blue" | "orange" | "green";
}) {
  const fontColours = {
    blue: "text-blue-500",
    orange: "",
    green: "",
  };
  const iconColours = {
    blue: "bg-blue-100",
    orange: "",
    green: "",
  };

  return (
    <div className="bg-white p-4 rounded-sm shadow-sm flex justify-between items-center">
      <div>
        <h2 className="text-sm font-semibold mb-1">{heading}</h2>
        <p className={`${fontColours[colourScheme]} text-2xl font-bold mb-1`}>
          {count}
        </p>
        {comment}
      </div>
      <div
        className={`${iconColours[colourScheme]} h-[45px] w-[45px] flex items-center justify-center rounded-full`}
      >
        {svg}
      </div>
    </div>
  );
}
