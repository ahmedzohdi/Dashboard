import React from "react";
import { Outlet } from "react-router";
import Menu from "./DashboardMenu/Menu";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <Menu />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
