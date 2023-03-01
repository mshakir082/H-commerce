import { useState } from "react";
import classes from "./seeCart.module.css";
const SeeCart = () => {
  const [cartShow, setCartShow] = useState(false);
  const seeCart = {
    background: "#777777",
    height: "40px",
    width: "10%",
    borderRadius: "10px",
    border: "none",
    color: "#5FBDDD",
    cursor: "pointer",
  };
  return (
    <>
      <button style={seeCart} onClick={() => setCartShow(true)}>
        See the cart
      </button>
      {cartShow && (
        <div className={classes.cartContainer}>
          <div className={classes.crosButtonDiv}>
            <button
              className={classes.button}
              onClick={() => setCartShow(false)}
            >
              X
            </button>
          </div>
          <h1 className={classes.headCart}>CART</h1>
          <div className={classes.cartDetails}>
            <h2>ITEM</h2>
            <h2>PRICE</h2>
            <h2>QUANTITY</h2>
          </div>
          <div>
            <spna className={classes.totalCart}>
              <h2>Total $0</h2>
            </spna>
          </div>
          <div className={classes.purchase}>
            <button>PURCHASE</button>
          </div>
        </div>
      )}
    </>
  );
};
export default SeeCart;
