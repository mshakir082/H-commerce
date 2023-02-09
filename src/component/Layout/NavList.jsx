import classes from "./NavList.module.css";
import { Link } from "react-router-dom";
const NavList = () => {
  return (
    <div className={classes.Navlist}>
      <h1 className={classes.NavList_text}>
        <Link to="/products">Products</Link>
      </h1>
      <h1 className={classes.NavList_text}>
        <Link to="/cart">Cart</Link>
      </h1>
    </div>
  );
};
export default NavList;
