import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Home2 from "../page/home/Home2/Home2";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/not-found/NotFound";
import Products from "../page/products/Products";

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
                path: "/products",
                element: <Products />
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
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;
