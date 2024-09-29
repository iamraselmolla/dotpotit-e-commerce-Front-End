import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Home2 from "../page/home/Home2/Home2";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/not-found/NotFound";
import Products from "../page/products/Products";
import AddProduct from "../page/add-product/AddProduct";
import VerifyEmail from "../page/verify-email/VerifyEmail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home2 />,
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: '/verify/:token',
                element: <VerifyEmail />, // Verification Route
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;
