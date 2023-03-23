import { Container, FormControl, Nav, Navbar, Dropdown, Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context"
import classes from "./Header.module.css"


const Header = () => {

    const { state: { cart },
        dispatch } = CartState()
    return <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
        <Container>
            <Navbar.Brand>
                <Link to="/">H-commerce</Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl style={{ width: 500 }} placeholder="searchproducts" className="m-auto" />
            </Navbar.Text>
            <Nav> 
                
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Cart
                        <Badge style={{ backgroundColor: "red" }}>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370,  marginLeft: -200 }}>
                        {
                            cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((item) => (
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
                                                <Button onClick={(() => {
                                                    dispatch({
                                                        type: "REMOVE",
                                                        payload: item
                                                    })

                                                })} >X</Button>
                                            </span>

                                        ))
                                    }
                                </>
                            ) :
                                (<span style={{ padding: 10 }}>Cart is empty!</span>)
                        }
                        <Link to="/cart"><Button style={{width:350 ,  marginLeft: 10,color: "white"}}>Go to Cart</Button></Link>
                       
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
}

export default Header