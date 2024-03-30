import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Body from "./Components/Body";
import RestaurantDetail from "./Components/RestaurantDetails";
import AboutUs from "./Components/AboutUs";
import ConnectUs from "./Components/ConnectUs";
import Error from "./Components/Error";

import Cart from "./Components/Cart";

//Imported outled from the react-router-dom and added the childer to main rout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ConnectUs />,
      },
      {
        path: "/restaurent/:Resid",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
