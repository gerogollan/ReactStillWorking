import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

import { getCategory , getProducts } from '../firebase/firebase';

export default function ItemListContainer(props) {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => setProducts(response));
    } else {
      getCategory(catId).then((response) => setProducts(response));
    }
  }, [catId]);

  return (
    <>
      <h1>
        {props.text} {catId}
      </h1>
      <h2 className="H2text">Look this new styles!</h2>

      <div className="products-grid">
        {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
