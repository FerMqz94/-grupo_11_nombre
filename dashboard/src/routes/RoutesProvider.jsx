import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Dashboard from "../pages/Dashboard";
import { routesProducts , } from "./RoutesProduct";
import{routesUsers} from "./RouterUsers";
import {routesGraficos} from "./RoutesGraficos"
import { routesSales } from "./RoutesSales";
import { routesCreateProducts } from "./RouterCreateProducts";
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
      ... routesUsers,
      ... routesGraficos,
      ...routesSales,
      ...routesCreateProducts
    ],
  },
]);

export const RouterProvider_ = () => < RouterProvider router={router} />;
