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

  return (
    <>
      <NavBar />
      <section className="CartTextContainer">
        {cart.length === 0 ? (
          <main className="emptyCartContainer">
            <h1 className="h1EmptyCart">Your Cart is Empty!</h1>
            <ButtonComponent text="Go back to the store" to="/" />
          </main>
        ) : (
          <div className="cartItems">
            <h1 className="h1CartList">{props.text}</h1>
            <h2>Items in your Cart: {cart.length}</h2>
            <hr />
            {cart.map((product, index) => (
              <div key={index} className="cartItemCard">
                <div className="cartItemImageContainer">
                  <img src={product.image} alt={product.title} className="productCartImage" />
                </div>
                <div className="cartItemDetails">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {product.quantity}</p> {/* Agregada la cantidad */}
                </div>
              </div>
            ))}
            <button className="emptyCartButton" onClick={handleEmptyCart}>
              Empty Cart
            </button>
          </div>
        )}
      </section>
    </>
  );
}
