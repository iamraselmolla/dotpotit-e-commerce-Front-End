import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import Home2 from "../page/home/Home2/Home2";
import Layout from "./Layout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/not-found/NotFound";
import Products from "../page/products/Products";
import VerifyEmail from "../page/verify-email/VerifyEmail";
import ProductDetails from "../page/products/ProductDetails";
import AddProduct from "../page/products/AddProduct";
import WishLists from "../page/wishlist/WishLists";
import PrivateRoute from "./PrivateRoute";
import Cart from "../page/cart/Cart";
import PurchaseHistory from "../page/dashboard/user/PurchaseHistory";
import CategoryForm from "../page/dashboard/admin/add-category/AddCategory";

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
                path: "/add-category",
                element: <PrivateRoute><CategoryForm /></PrivateRoute>
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/add-product",
                element: <PrivateRoute> <AddProduct /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><WishLists /></PrivateRoute>,
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
            },
            {
                path: "/history",  // Relative path
                element: <PrivateRoute><PurchaseHistory /></PrivateRoute>,
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
