import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import classes from "./Menu.module.css";

interface props {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ showMenu, setShowMenu }: props) => {
  const [focus, setFocus] = useState<string>("home");

  const focusHome = focus === "home" ? classes.focus : classes.div;
  const homeIcon =
    focus === "home" ? classes["change-icon-color"] : classes.icon;
  const homeText = focus === "home" ? classes.text : classes.h3;

  const focusTasks = focus === "tasks" ? classes.focus : classes.div;
  const tasksIcon =
    focus === "tasks" ? classes["change-icon-color"] : classes.icon;
  const tasksText = focus === "tasks" ? classes.text : classes.h3;

  const display = showMenu ? classes.menu : classes.show;
  return (
    <div className={display}>
      <div className={classes.close}>
        <AiOutlineClose
          className={classes["close-icon"]}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      </div>
      <Link to="/" className={classes.link} onClick={() => setFocus("home")}>
        <div className={focusHome}>
          <IoMdHome className={homeIcon} />
          <h3 className={homeText}>Home</h3>
        </div>
      </Link>
      <Link
        to="/tasks"
        className={classes.link}
        onClick={() => setFocus("tasks")}
      >
        <div className={focusTasks}>
          <BiTask className={tasksIcon} />
          <h3 className={tasksText}>Tasks</h3>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
