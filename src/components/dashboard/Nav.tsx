import { Link } from "react-router"

export default function Nav () {
    return (
        <div className="w-[240px] border-r-2 border-black row-start-1 row-end-3 min-h-screen flex flex-col gap-y-2">
            <h2>Job Tracker</h2>
            <Link to="userDashboard">Dashboard</Link>
            <Link to="applications">Applications</Link>
        </div>
    )
}