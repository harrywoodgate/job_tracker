import Nav from "./Nav.tsx"
import { Outlet } from "react-router"
import Header from "./Header.tsx"

export default function Dashboard () {
    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <Header />
        <Nav />
        <Outlet />
        </div>
    )
}