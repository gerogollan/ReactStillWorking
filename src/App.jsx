import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import CartComponent from './components/CartComponent';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import NotFoundComponent from './components/NotFoundComponent';

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>

      <footer>
      <h3> © 2025 Vanguard • Exclusivity & Style in Every Detail </h3>
      </footer>
    </>
  );
}

export default App;
