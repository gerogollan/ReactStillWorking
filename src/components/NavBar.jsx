import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
    <header>

     {/* aca deberia ir un logo */}

     <div className="logoContainer">
      <Link to="/">
          <img 
            src="https://i.imgur.com/fstyU5X.png" 
            alt="Logo" 
            className="logo"
          />
      </Link>
        </div>

      <nav>
        <ButtonComponent className="firstButton" to="/category/shoes" text="Shoes" />
        <ButtonComponent to="/category/clothing" text="Chloting" />
        <ButtonComponent to="/category/accesories" text="Accesories" />
      </nav>
  
      
          <div className="cartWidgetContainer">
            <CartWidget text="Cart" className="cartWidget" />
          </div>
        
     

    </header>
  </>
  );
}
