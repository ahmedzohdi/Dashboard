import React from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import Menu from "./DashboardMenu/Menu";
import { VscMenu } from "react-icons/vsc";
import classes from "./Main.module.css";

const Main = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  console.log(showMenu);
  return (
    <div className={classes.main}>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className={classes.content}>
        <VscMenu
          className={classes["menu-icon"]}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />

        <Outlet />
      </div>
    </div>
  );
};

export default Main;
