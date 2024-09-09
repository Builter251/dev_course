import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import Root from "./components/Root";
import Home from "./components/Home";
import ProductInfo from "./components/ProductInfo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "product/:productId",
        element: <ProductInfo />
      }
    ]
  },
  {
    path:"/product",
    element:<Product />,
    errorElement: <NotFound />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
