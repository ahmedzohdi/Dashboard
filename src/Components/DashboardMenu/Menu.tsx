import React from "react";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default Menu;
