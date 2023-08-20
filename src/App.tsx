import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Components/DashboardMenu/Menu";
import classes from "./App.module.css";
import Home from "./Components/DashboardMenu/Home";
import Main from "./Components/Main";
import Tasks from "./Components/DashboardMenu/Tasks";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "tasks", element: <Tasks /> },
      ],
    },
  ]);
  return (
    <div className={classes.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
