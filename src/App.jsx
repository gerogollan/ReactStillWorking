import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import CartComponent from './components/CartComponent';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import NotFoundComponent from './components/NotFoundComponent';
import { CartProvider } from './context/CartContext';

import { getProducts } from './firebase/firebase';
import { useEffect } from 'react';
import CheckoutComponent from './components/ChekoutComponent';



function App() {


  useEffect(() => {
    getProducts();
  }, []);


  return (
    <CartProvider>
    
     
      <BrowserRouter>
     
      
           <NavBar />
      
     
     
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer text="Welcome to Vanguard" 
                                        text2="Look this new styles ⚡"/>}
          />

          <Route
            exact
            path="/category/:catId"
            element={<ItemListContainer text="" 
                                        text2="your style on fire 🔥"/>}
          />


          <Route exact path='/product/:id' element={<ProductDetail />}/>

          <Route exact path='/cart' element={<CartComponent text="Cart"/>}/>


          <Route exact path="*" element={<NotFoundComponent />} />

          <Route exact path='/checkout' element={<CheckoutComponent />} />
        </Routes>
        
      </BrowserRouter>

      
     

      <footer className='FooterTextContainer'>
      <h3 className='FooterH3'> © 2025 Vanguard • Exclusivity & Style in Every Detail </h3>
      </footer>
      </CartProvider>
  );
}

export default App;

