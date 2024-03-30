import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";
import AboutUs from "./Components/AboutUs"
import ConnectUs from "./Components/ConnectUs";
import Error from "./Components/Error";


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
        path:"/restaurent/:Resid",
        element :<RestaurantMenu/>
      },{
        path:"/cart",
        element :<Cart/>

      }
    ],
    
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

