import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { getProduct } from "../../asyncMock";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const maxCount = 10;
  const minCount = 0;
  const handleAddToCart =() =>{
    alert("This items are now in your cart: " + count + " " + product.title);
  }

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
    <div className="PDContainer">

      <div className="leftContainer">
          <img className="PDImage"  src={product?.image} alt={product?.description} />
      </div>

      <div className="rightContainer"> 
          <h1 className="PDTitle" >{product?.title}</h1>
          <hr></hr>
         <p className="PDDescription">{product?.description}</p>
         <p className="PDPrice">$ {product?.price} ARS</p>

         <button className="PDButton" 
                 onClick={handleAddToCart}  >Add to Cart</button> 


        <div className="PDCounter" >
          <button 
            className="PDCountButton ButtonMinus"  
            onClick={() => setCount(count > minCount ? count - 1 : count)}
            disabled={count <= minCount}
          >
            -
          </button>
          <span>{count}</span>
          <button 
            className="PDCountButton ButtonPlus" 
            onClick={() => setCount(count < maxCount ? count + 1 : count)}
            disabled={count >= maxCount}
          >
            +
          </button>
         </div>
      </div>
    </div>
    </>
  );
}
