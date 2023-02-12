const Products = () => {

  const ProductData=[
    {
    "id": 1,
    "title": "Album 1",
    "imgUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    "price": 12.99,
  },
  {
    "id": 2,
    "title": "Album 2",
    "imgUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    "price": 14.99,
  },
  {
    "id": 3,
    "title": "Album 3",
    "imgUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    "price": 9.99,
  },
  {
    "id": 4,
    "title": "Album 4",
    "imgUrl": "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    "price": 19.99,
  },
];

  return (
    <>
    {/* <h1>Products</h1> */}
    <div style={{textAlign:'center'}}>
      <h1 style={{fontStyle:'oblique'}}>MUSiC</h1>
      <div style={{width:'60%',margin:'auto',height:'1000px',display:'flex',justifyContent:'space-between', flexWrap: "wrap"}}>
       {/*  */}
       {ProductData?.map((el)=>(
        <>
        <div style={{border:'1px solid red',height:'370px',width:'40%'}} key={el.id}>
            <h2>{el?.title}</h2>
            <img src={el?.imgUrl} />
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <p>${el?.price}</p>
              <button>ADD TO CART</button>
            </div>
        </div>
        </>
       ))}
       
       {/*  */}
      
      </div>
    </div>
    </>
  );
};
export default Products;
