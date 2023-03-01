import Products from "../../pages/Products";
import Generics from "../Layout/Generics";
import SeeCart from '../Cart/SeeCart'
const product = () => {
  const HStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "44px",
  };
  return (
    <>
      <Generics>
        <h1 style={HStyle}>The Generics</h1>
      </Generics>
      <Products></Products>
      <div style={{ textAlign: "center", margin: "-58px 0px 35px" }}>
        <SeeCart />
      </div>
    </>
  );
};
export default product;
