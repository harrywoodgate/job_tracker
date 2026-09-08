import App from "./App.tsx";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Applications from "./components/dashboard/applications/Applications.tsx";
import UserDashboard from "./components/dashboard/user_dashboard/UserDashboard.tsx";
import Settings from "./components/dashboard/Settings.tsx";

type route = {
  path: string;
  element: React.JSX.Element;
  // might be a better way of doing this
  children?: { path: string; element: React.JSX.Element }[];
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
    children: [
      { path: "userDashboard", element: <UserDashboard /> },
      { path: "applications", element: <Applications /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

export default routes;
