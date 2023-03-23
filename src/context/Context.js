import { faker } from '@faker-js/faker';
import { createContext, useReducer , useContext} from "react"
import { cartReducer } from './Reducers';



const Cart = createContext()
 faker.seed(99);
const Context = ({ children }) => {

    const products = [...Array(40)].map(() => ({
        id : faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        // image:`${faker.image.fashion()}?random=${Math.round(Math.random() * 1000)}`,
        image: faker.image.image(640,480,true)
        
    }));

    const initialstate = {
        products: products,
        cart: [],
    }

    const [state, dispatch] = useReducer(cartReducer, initialstate)

    return <Cart.Provider value={{ state, dispatch }}>
        {children}
    </Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}