import { useEffect, useState } from "react";
import "./styles.css"

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [productsArray, setProductsArray] = useState([]);
  const [count, setCount] = useState(0);
  //Here we keep the count of the number we clicked the "show more" button
  // /or this can also be the page number
  const [disabled,setDisable]=useState(false);

  
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
       ` https://dummyjson.com/products?limit=20&skip=${count===0 ? 0 : count*20}`
      );
      const result = await res.json();

      if (result && result.products && result.products.length > 0) {
        console.log(result.products);
        setProductsArray((prevData)=>[...prevData,...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    {productsArray && productsArray.length===100 ? setDisable(true):setDisable(false)}
  }, [productsArray]);

  if (loading) {
    return <div>Loading Please Wait...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {productsArray &&
          productsArray.length > 0 &&
          productsArray.map((element) => (
            <div className="product" key={element.id}>
              <img src={element.thumbnail} alt={element.title} />
            </div>
            
          ))}
          
          <div className="button-container">
                <button disabled={disabled} onClick={()=>{setCount(count+1)}}>Load More Items</button>
            {disabled ? <p>You have reached 100 products</p>:null}
          </div>
      </div>
    </div>
  );
}
