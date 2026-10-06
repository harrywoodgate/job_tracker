import UDSRBarChart from "./UDSRBarChart"
import UDSRPieChart from "./UDSRPieChart"

export default function UDSecondRow () {
    return (
        <div className="grid grid-cols-2 gap-x-4">
            <UDSRBarChart />
            <UDSRPieChart />
        </div>
    )
}