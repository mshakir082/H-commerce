import Generics from '../component/Layout/Generics'
import Products from '../pages/Products';
import SeeCart from '../component/Cart/SeeCart'
import Footer from './Footer';
const Home = () => {
  const HStyle ={
    textAlign:'center',
    color:'white',
    fontSize:'44px'
  };
  
  return (
    <>
      {/* <h1>Home</h1> */}
      <Generics>
        <h1 style={HStyle}>The Generics</h1>
      </Generics>
      <Products></Products>
      <div style={{textAlign:'center',margin:'-58px 0px 35px'}}>
        <SeeCart/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
