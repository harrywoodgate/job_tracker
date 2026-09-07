import App from "./App.tsx";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

type route = {
  path: string;
  element: React.JSX.Element;
};

const routes: route[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];

export default routes;
