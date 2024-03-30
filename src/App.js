import React from "react";

import HeadComponent from "./Components/Header";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Default import=>
//imorting the default import from Header.js
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <HeadComponent />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
