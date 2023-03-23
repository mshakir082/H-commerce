import { Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context"
import classes from "./Cart.module.css"


const Cart = () => {

    let {
        state: { cart },
        dispatch
    } = CartState()

    const price = cart.map((i) => {
        return +i.price.split(".")[0]
    }).reduce((acc, num, i, arr) => {
        return acc + num
    }, 0)


    console.log(price)

    return <div className={classes.home}>
        <div className={classes.productcontainer}>
            {cart.length > 0 ? (<ListGroup>
                {
                    cart.map(item => (
                        <span className={classes.cartitem}>
                            <img
                                src={item.image}
                                className={classes.cartitemimg}
                                alt={item.name}
                            />
                            <div className={classes.cartitemdetail} >
                                <span>{item.name}</span>
                                <span>{`₹${item.price.split(".")[0]}`}</span>
                            </div>
                            <Button variant="danger"onClick={(() => {
                                                    dispatch({
                                                        type: "REMOVE",
                                                        payload: item
                                                    })

                                                })} >REMOVE</Button>
                        </span>
                    ))
                }
            </ListGroup>) : (<span>Cart is Empty <br />   <Link to="/">Shop Now!!!</Link></span>)
            }

        </div>
        <div className={classes.prices}>
            <div  className={classes.final}>
            <span>{`total price ₹  ${price}`}</span>
          <span>  <Button  onClick={() => {
                 cart = [];
                alert("Thanx For shopping with us")
                   
            }}>Purchase</Button>
            </span>
            </div>
        </div>
    </div>
}

export default Cart