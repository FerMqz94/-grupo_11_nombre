import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Dashboard from "../pages/Dashboard";
import { routesProducts , } from "./RoutesProduct";
import{routesSearch} from "./RouterSearch"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      ...routesProducts,
      ... routesSearch,
    ],
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;
