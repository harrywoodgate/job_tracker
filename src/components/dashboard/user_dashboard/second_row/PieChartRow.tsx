export default function PieChartRow({
  colourIndex,
  heading,
  total,
  percentage,
}: {
  colourIndex: number;
  heading: string;
  total: number;
  percentage: string;
}) {

const colours = [
    "bg-blue-500",
    "bg-teal",
    "bg-yellow-500",
    "bg-green-600",
    "bg-red-500"
]

  return (
    <>
    <div className="grid grid-cols-[3fr_1fr_1fr] items-center w-full">
      <div className="flex items-center gap-x-4">
          <div className={`h-[10px] w-[10px] rounded-full ${colours[colourIndex]}`}></div>
          <p className="text-sm">{heading}</p>
      </div>
      <p className="font-semibold text-sm">{total}</p>
      <p className="text-gray text-sm">{percentage}%</p>
    </div>
    <div className="h-[1px] bg-gray-200 rounded-md  w-[90%] flex justify-center"></div>
    </>
  );
}
