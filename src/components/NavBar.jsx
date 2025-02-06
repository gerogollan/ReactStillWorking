import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';

export default function NavBar() {
  return (
    <header>
      <div>
        {/* //aca va el logo de Vanguard no un boton */}
        <ButtonComponent to="/" text="LOGO" />
      </div>

      <nav>
        <ButtonComponent className="firstButton" to="/category/shoes" text="Shoes" />
        <ButtonComponent to="/category/clothing" text="Chloting" />
        <ButtonComponent to="/category/accesories" text="Accesories" />
      </nav>

      <div className="cartWidgetContainer">
        <CartWidget className="cartWidget" />
      </div>
    </header>
  );
}
