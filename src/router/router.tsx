import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Basket from "../pages/Basket/Basket";
import NotFound from "../pages/NotFound/NotFound";
import ProductPage from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pizza/:pizzaId",
        element: <ProductPage />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
