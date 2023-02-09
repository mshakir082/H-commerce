import React from "react";
import NavIcon from "../component/Layout/NavIcon";
import NavList from "../component/Layout/NavList";
import Button from "../component/Layout/Button";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav className={classes.nav_container}>
        <div className={classes.nav_icon}>
          <NavIcon />
          <h1 className={classes.nav_icon_text}>H-Shop</h1>
        </div>
        <div className={classes.nav_list_container}>
          <NavList />
          <div>
            <Button className={"login_button"}>Login</Button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
