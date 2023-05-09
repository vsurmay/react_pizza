import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import { Suspense, lazy } from "react";
import FadeLoad from "../components/Loader/FadeLoad";

const Basket = lazy(
  () => import(/* webpackChunkName: "Basket" */ "../pages/Basket/Basket")
);
const ProductPage = lazy(
  () =>
    import(
      /* webpackChunkName: "ProductPage" */ "../pages/ProductPage/ProductPage"
    )
);

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
        element: (
          <Suspense fallback={<FadeLoad />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/basket",
        element: (
          <Suspense fallback={<FadeLoad />}>
            <Basket />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
