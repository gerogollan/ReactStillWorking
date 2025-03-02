import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { getProduct } from "../firebase/firebase";
import { CartContext } from "../context/CartContext";

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

  // const minCount = 1;
  // const maxCount = product?.stock;
  

  return (
    <>
      {loading ? (
        <h2> LOADING! </h2>
      ) : (
        <div className="PDContainer">
          <div className="leftContainer">
            <img className="PDImage" src={product?.image} alt={product?.description} />
          </div>

          <div className="rightContainer">
            <h1 className="PDTitle">{product?.title}</h1>
            <hr />
            <p className="PDDescription">{product?.description}</p>
            <p className="PDPrice">$ {product?.price} ARS</p>

            {/* <div className="PDCounter">
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
            </div> */}

            <button className="PDButton" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
