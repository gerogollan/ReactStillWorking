import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';


import { getCategory , getProducts } from '../firebase/firebase';
import { BarLoader } from 'react-spinners';

export default function ItemListContainer(props) {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!catId) {
      getProducts().then((response) => { 
        setProducts(response) 
        setLoading(false);
     });
    } else {
      getCategory(catId).then((response) => {
        setProducts(response)
        setLoading(false);
      });
    }
  }, [catId]);

  return (
    <>
    <section>
      <h1>
        {props.text} {catId}
      </h1>
      <h2 className="H2text">Look this new styles!</h2>
     
      </section>
     {loading ? <BarLoader color="#5fffb7e6" width={700} />  :
      
      
       
       <div className="products-grid">
      {products?.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
     </div>
       
       }  


    </>
  );
}
