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



function App() {


  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
    
     
      <BrowserRouter>
     
      <CartProvider>
           <NavBar />
      
     
     
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer text="Welcome to Vanguard" />}
          />

          <Route
            exact
            path="/category/:catId"
            element={<ItemListContainer text="" />}
          />


          <Route exact path='/product/:id' element={<ProductDetail />}/>

          <Route exact path='/cart' element={<CartComponent text="Cart"/>}/>


          <Route exact path="*" element={<NotFoundComponent />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>

      
     

      <footer>
      <h3> © 2025 Vanguard • Exclusivity & Style in Every Detail </h3>
      </footer>
    </>
  );
}

export default App;

//COSAS POR HACER

//Recibir los productos desde firebase  ✔
//mostrar los productos en el ItemListContainer  ✔
//mostrar un producto en el ItemDetail pasando el id por parametro ✔
// clase 7 ✔

//crear componente de itemCount en el itemdeatil que realize
//validaciones de (valor minimo, limite por stock)

//hacer que los productos agregados al carrito se rendericen dentro de CartComponent

//renderizado condicional en el CartWidget, ocultar el componente
//si el carrito esta vacio.


//crear una funcion que haga una primer order de pedido con el formato
// {buyer: {name: "", email:"", phone:""}, items: [{id: "", title:"", price:""}], total: ""}

//crear un form que reciba los datos del buyer y que se envie a firebase

//Agregar un Loading en el ItemListContainer y en el ItemDetail
// utilizando un ternario / pondría una imagen de un skater girando
//clase 6

//route a checkout donde tiene que haber un formulario con nombre, email
//phone, fecha ,total de la compra, cantidad y data de los items del carrito a llevar
//al terminar la compra se tiene que mostrar el id de la orden



//deployar cuando este todo listo en netlify   y usar ese link para la entrega
