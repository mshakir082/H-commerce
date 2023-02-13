import classes from "./NavList.module.css";
import { Link } from "react-router-dom";
const NavList = () => {
  const handelClick = ()=>{
    console.log('shakir');
  }
  return (
    <div className={classes.Navlist}>
      <h1 className={classes.NavList_text}>
        <Link to="/products">Products</Link>
      </h1>
      <h1 className={classes.NavList_text} onClick={handelClick}>
        <Link to="/cart">Cart</Link>
      </h1>
    </div>
  );
};
export default NavList;
