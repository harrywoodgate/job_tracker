import UDHeader from "./UDHeader"
import UDFirstRow from "./first_row/UDFirstRow"
import UDSecondRow from "./second_row/UDSecondRow"

export default function UserDashboard () {
    return (
        <div className="p-6 min-h-svh flex justify-center">
            <div className="w-full max-w-[1500px] flex flex-col gap-y-8">
            <UDHeader />
            <UDFirstRow />
            <UDSecondRow />
            </div>
        </div>
    )
}