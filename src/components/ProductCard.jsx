import './ProductCard.css';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {

  return (
    <>
      <article className="product-card">
        <h3>
          {product.title}
        </h3>
        <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        </Link>
        <p className="ProductPrice" >${product.price}</p>
        <Link to={`/product/${product.id}`}>
           <button className="details-button">
             More details
          </button>  
             
          </Link>
        
      </article>
      
    </>
  );
}
