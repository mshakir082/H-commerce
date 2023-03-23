import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import classes from "./Home.module.css"


const Home = () => {

    const { state: { products } } = CartState()
    console.log(products)
    return (
    <div className = {classes.home}>
        
        {
            products.map((item) => {
              return  <SingleProduct item={item} key = {item.username} />
              
            })
        }
       
    </div>
    )
}

export default Home