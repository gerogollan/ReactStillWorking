import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { getProduct } from "../firebase/firebase";
import { CartContext } from "../context/CartContext";
import { BarLoader } from "react-spinners";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cart, setCart, addProduct] = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      const productData = await getProduct(id);
      setProduct(productData);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const handleClick = () => {
    if (product) {
      addProduct(product);
      console.log("Product added:", product.title);
    }
  };

 
  

  return (
    <>
      {loading ? <>
    <h1>Loading...</h1>
    <BarLoader color="#5fffb7e6" width={700} /> 
    </>: (
        <div className="PDContainer">
          <div className="leftContainer">
            <img className="PDImage" src={product?.image} alt={product?.description} />
          </div>

          <div className="rightContainer">
            <h1 className="PDTitle">{product?.title}</h1>
            <hr />
            <p className="PDDescription">{product?.description}</p>
            <p className="PDPrice">$ {product?.price} ARS</p>

            <button className="PDButton" onClick={handleClick}>
              Add to Cart
            </button>
          </div>




          
        </div>
      )}

      
      
    </>
  );
}
