import UDHeader from "./UDHeader"
import UDFirstRow from "./first_row/UDFirstRow"
import UDSecondRow from "./second_row/UDSecondRow"
import UDThirdRow from "./third_row/UDThirdRow"

export default function UserDashboard () {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full gap-y-8">
            <UDHeader />
            <UDFirstRow />
            <UDSecondRow />
            <UDThirdRow />
            </div>
        </div>
    )
}