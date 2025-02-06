import React from 'react';
import '../components/CartWidget.css';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <>
       
      <Link to="/cart">
       <button className="cartWidget"> 
        <div className='CartText'> 0 </div>   
        <img src='https://i.imgur.com/Xk0oZkt.png' alt="Cart" className="imgCart" />
       </button>
      </Link>
    
    
      
    </>
  );
}
