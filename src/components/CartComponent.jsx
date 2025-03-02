import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import NavBar from "./NavBar";
import ButtonComponent from "./ButtonComponent";
import "./CartComponent.css";

export default function CartComponent(props) {
  const [cart, setCart] = useContext(CartContext);

  const handleEmptyCart = () => {
    setCart([]);
  };

  if (cart.length === 0) {
    return (
      <main className="emptyCartContainer">
        <h1 className="h1emptyCart">Your Cart is Empty!</h1>
        <ButtonComponent text="Go back to the store" to="/" />
      </main>
    );
  }

  return (
    <main className="CartTextContainer">
      <NavBar />
      <h1>{props.text}</h1>
      <h2>Items in your Cart</h2>
      <h1>Carrito: {cart.length}</h1>

      <button onClick={handleEmptyCart}>Vaciar carrito</button>
    </main>
  );
}
