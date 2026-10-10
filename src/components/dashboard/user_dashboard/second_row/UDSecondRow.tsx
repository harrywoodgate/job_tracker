import UDSRBarChart from "./UDSRBarChart"
import UDSRPieChart from "./UDSRPieChart"

export default function UDSecondRow () {
    return (
        <div className="xl:grid grid-cols-2 gap-x-4 flex flex-col gap-y-4">
            <UDSRBarChart />
            <UDSRPieChart />
        </div>
    )
}