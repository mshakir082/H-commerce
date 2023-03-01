import Generics from "../component/Layout/Generics";
import Footer from "./Footer";
const Home = () => {
  const HStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "44px",
  };
  const data = [
    {
      date: "JUL16",
      title: "DETROIT, MI",
      describe: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      title: "BRISTOW, VA",
      describe: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      title: "PHOENIX, AZ",
      describe: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      title: "LAS VEGAS, NV",
      describe: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      title: "DETROIT, MI",
      describe: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      title: "CONCORD, CA",
      describe: "CONCORD PAVILION",
    },
  ];
  return (
    <>
      {/* <h1>Home</h1> */}
      <Generics>
        <h1 style={HStyle}>The Generics</h1>
      </Generics>
      <h1 style={{ textAlign: "center" }}>TOURS</h1>
      {data.map((el)=>(
        <>
        <div style={{display:'flex',justifyContent:'space-around',margin:'40px 0px'}}>
        <h5>{el.date}</h5>
        <div>{el.title}</div>
        <div>{el.describe}</div>
        <div><button>BUY TICKETS</button></div>
       </div>
      <hr></hr>
      </>
      ))}
      
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
