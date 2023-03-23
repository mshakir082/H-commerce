import { Link } from "react-router-dom"
import classes from "./Subheadder.module.css"

const SubHeadder = () => {

    return <div className={classes.subheadder}>
          <Link to="/">Home</Link>
        <a>        Best Sellers</a>
        <a>        Mobiles</a>
        <a>        Customer Service</a>
        <a>        Today's Deals</a>
        <a>        Electronics</a>
        <Link to="/login">Login</Link>
        
    </div>
}

export default SubHeadder