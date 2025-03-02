import React from "react";
import "./CheckoutComponent.css";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";

const CheckoutComponent = () => {
  const [cart] = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>

      <hr></hr>
        <div>
          <h3>Products you have in the cart</h3>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>{product.title} X1</li>
            ))}
          </ul>
        </div>

        <hr></hr>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>


        <button type="submit">Submit</button>
        <ButtonComponent to="/cart" text="Go back" > </ButtonComponent>
      </form>
    </div>
  );
};

export default CheckoutComponent;
