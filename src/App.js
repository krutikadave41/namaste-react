import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  /* some auth logic */
  useEffect(() => {
    setUserName("Krutika Dave");
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
