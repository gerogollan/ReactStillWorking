import React, { useState, useContext } from "react";
import "./CheckoutComponent.css";
import { CartContext } from "../context/CartContext";
import ButtonComponent from "./ButtonComponent";
import { createOrder } from "../firebase/firebase";

const CheckoutComponent = () => {
  const [cart, setCart] = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [orderId, setOrderId] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      console.error("No puedes crear una orden con un carrito vacío.");
      return;
    }

    const newOrder = {
      name: values.name,
      email: values.email,
      number: values.number,
      date: new Date(),
      items: cart,
      total: total(),
    };

    console.log("Orden a enviar:", newOrder);

    try {
      const generatedOrder = await createOrder(newOrder);

      setValues({
        name: "",
        email: "",
        number: "",
      });
      console.log("Order created successfully:", newOrder);
      setCart([]);

      setOrderId(generatedOrder);
      console.log("tu codigo de compra es " + generatedOrder);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleInputChange = (event) => {
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
    <>
      <div className="CheckoutContainer">
        {orderId ? (
          <div>
            <h1 className="H1Check"> thanks for your purchase </h1>
            <h2 className="H2Check"> your order id is</h2> 
            <h3 className="OrderId">{orderId}</h3>
            <hr></hr>
            <ButtonComponent to="/" text="Go Back"></ButtonComponent>
          </div>
        ) : (
          <>
            <div className="FormContainer">
              <hr></hr>
              <div>
                <h3 className="h3Check">Products you have in the cart</h3>
                <ul>
                  {cart.map((product, index) => (
                    <li key={index}>
                      {product.title} $ {product.price} X1
                    </li>
                  ))}
                </ul>
              </div> 

              <span className="TotalSpan">Total:
              <p className="TotalP" >${total()}</p>
              </span>

              <hr></hr>
              
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="number">Number:</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={values.number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button className="SubmitButton" type="submit">
                  Submit
                </button>
              </form>
              <ButtonComponent
                className="GoBackButton"
                to="/cart"
                text="Go back"
              ></ButtonComponent>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CheckoutComponent;
