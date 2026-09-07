import { Link } from "react-router"

function App() {

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
    <h1 className="text-xl">Job Tracker</h1>
    <Link to="login">Login</Link >
    </div>
  )
}

export default App
