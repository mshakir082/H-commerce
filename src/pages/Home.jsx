import Generics from '../component/Layout/Generics'
import Products from '../pages/Products'
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
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
