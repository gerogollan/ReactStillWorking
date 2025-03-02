import React from 'react';
import { useContext } from 'react';
import '../components/CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {

  const [cart, setCart] = useContext(CartContext);
  return (
    <>
        
      <Link to="/cart">
       <button className="cartWidget"> 
        <div className='CartText'> {cart.length} </div>   
        <img src='https://i.imgur.com/Xk0oZkt.png' alt="Cart" className="imgCart" />
       </button>
      </Link>
    
    
      
    </>
  );
}
