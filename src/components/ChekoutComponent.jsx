import React, { useState, useContext } from "react";
import "./CheckoutComponent.css";
import { CartContext } from "../context/CartContext";
import ButtonComponent from "./ButtonComponent";
// import { createOrder } from "../firebase/firebase";

const CheckoutComponent = () => {
  const [cart] = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleSumbit = (event) => {
    event.preventDefault();
    const newOrder = {
      name: values.name,
      email: values.email,
      number: values.number,
      date: new Date().toLocaleDateString(),
      items: cart,
      total: total(),
    };
    setValues({
      name: "",
      email: "",
      number: "",
    });
    console.log(newOrder);
  };

  const handeImputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const total = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <hr></hr>
      <div>
        <h3>Products you have in the cart</h3>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} {product.price} X1
            </li>
          ))}
        </ul>
      </div>

      <hr></hr>

      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handeImputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handeImputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={values.number}
            onChange={handeImputChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
        <ButtonComponent to="/cart" text="Go back"></ButtonComponent>
      </form>
    </div>
  );
};

export default CheckoutComponent;
