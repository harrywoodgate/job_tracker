export default function LineChartLegend() {

  return (
    <div className="flex ml-[10%] gap-x-6">
      <div className="flex items-center gap-x-2">
        <div className="w-[8px] h-[8px] bg-blue-500 rounded-full"></div>
        <p className="text-xs">Applications</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-[8px] h-[8px] bg-teal rounded-full"></div>
        <p className="text-xs">Response</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-[8px] h-[8px] bg-yellow-500 rounded-full"></div>
        <p className="text-xs">Interview</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-[8px] h-[8px] bg-green-600 rounded-full"></div>
        <p className="text-xs">Offer</p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
        <p className="text-xs">Rejected</p>
      </div>
    </div>
  );
}
