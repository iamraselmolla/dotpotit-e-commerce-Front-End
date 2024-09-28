import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Home2 from "../page/home/Home2/Home2";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home2 />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
