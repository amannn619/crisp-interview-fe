import { createBrowserRouter } from "react-router-dom";
import Login from "../features/auth/login/Login";
import Register from "../features/auth/register/Register";
import AppLayout from "../shared/components/appLayout/AppLayout";
import Dashboard from "../features/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
])

export default router;