import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

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
                loader: ({params})=> fetch(`https://fakestoreapi.com/products/${params.id}`),
            }
        ]
    }
]);

export default router;