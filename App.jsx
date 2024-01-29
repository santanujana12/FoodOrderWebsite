import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Local Imports
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import RestaurantInfo from "./src/components/RestaurantInfo/restaurantInfo";
import Error from "./src/components/ErrorPage/Error";
import Shimmer from "./src/components/Loaders/shimmer1";

// Lazy Loading implementation
const Grocery = lazy(() => import("./src/components/Grocery/Grocery")); 

const App = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    );
}

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // Children routes
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers}/>);