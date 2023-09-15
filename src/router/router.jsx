import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
import Login from "../layout/Login";
import SignUp from "../layout/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/:id',
                element: <Product></Product>,
                loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`),
            },
            {
                path: '/jewelery',
                element: <CategoryProducts></CategoryProducts>
            },
            {
                path: '/men',
                element: <CategoryProducts></CategoryProducts>
            },
            {
                path: '/women',
                element: <CategoryProducts></CategoryProducts>
            },
        ]
    },
    {
        path: '/login',
        element:<Login/>
    },
    {
        path: 'sign-up',
        element: <SignUp></SignUp>
    }
]);

export default router;