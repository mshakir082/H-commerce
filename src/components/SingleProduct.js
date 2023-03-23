import { Card, Button, CarouselItem } from "react-bootstrap"
import { CartState } from "../context/Context"
import classes from "./Single.module.css"

const SingleProduct = ({ item }) => {

    const { state: { cart }, dispatch } = CartState()

    return <div className={classes.product}>
        <Card  className={classes.img}>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
                <Card.Title>
                    {item.name}
                </Card.Title>
                <Card.Subtitle>
                    <span>{`₹${item.price.split(".")[0]}`}</span>
                </Card.Subtitle>
                {cart.some(p => p.id === item.id) ?
                    (<Button onClick={(() => {
                        dispatch({
                            type: "REMOVE",
                            payload: item
                        })

                    })} variant = "danger">Remove</Button>) :

                    (<Button onClick={(() => {
                        dispatch({
                            type: "ADD",
                            payload: item
                        })

                    })}>Add</Button>)}


            </Card.Body>
        </Card>
    </div>
}

export default SingleProduct