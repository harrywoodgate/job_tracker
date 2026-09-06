import App from "./App.tsx";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";

type route = {
  path: string,
  element: React.JSX.Element
}

const routes: route[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

export default routes;
