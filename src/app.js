import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Contacts from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
// import RestMenu from "./components/RestMenu";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:"restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
