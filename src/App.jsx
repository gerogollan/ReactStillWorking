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

//COSAS POR HACER


// ✔

//crear componente de itemCount en el itemdeatil que realize
//validaciones de (valor minimo, limite por stock)






//Agregar un Loader en el ItemListContainer y en el ItemDetail ✔
// utilizando un ternario / pondría una imagen de un skater girando
//clase 6

//route a checkout donde tiene que haber un formulario con nombre, email✔
//phone, fecha ,total de la compra, cantidad y data de los items del carrito a llevar✔
//al terminar la compra se tiene que mostrar el id de la orden✔



//deployar cuando este todo listo en netlify   y usar ese link para la entrega
