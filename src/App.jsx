import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

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


          <Route exact path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
