import { useContext} from "react";
import { Link, } from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import NavBar from "./NavBar";
import ButtonComponent from "./ButtonComponent";
import "./CartComponent.css";

export default function CartComponent(props) {
  const [cart, setCart] = useContext(CartContext);

  const handleEmptyCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
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
                  <Link to={`/category/${product.category }`} >
                  <img src={product.image} alt={product.title} className="productCartImage" />
                  </Link>
                </div>

                <div className="cartItemDetails">
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))}
             <hr />
             
             <div className="TotalContainer">
             <h3 >Total:</h3>
            <p className="PTotal"> ${calculateTotal()}</p>
            </div>

            <button className="CartButton" onClick={handleEmptyCart}>
              Empty Cart
            </button>

            
            <ButtonComponent text="Continue with the purchase" className="CartButton" to="/checkout" />
          </div>
        )}
      </section>
    </>
  );
}
