import React, { useState, useContext } from "react";
import "./CheckoutComponent.css";
import { CartContext } from "../context/CartContext";
import ButtonComponent from "./ButtonComponent";
import { createOrder } from "../firebase/firebase";
import { createOrder } from "../firebase/firebase";

const CheckoutComponent = () => {
    const [cart,setCart] = useContext(CartContext);
    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newOrder = {
            name: values.name,
            email: values.email,
            number: values.number,
            date: new Date(),
            items: cart,
            total: total(),
        };

        if (cart.length === 0) {
            console.error("No puedes crear una orden con un carrito vacío.");
            return;
        }

        console.log("Orden a enviar:", newOrder);

        try {
            const orderId = await createOrder(newOrder)
            setValues({
                name: "",
                email: "",
                number: "",
            });
            console.log("Order created successfully:", newOrder);
            setCart([])
            console.log("Cart empty succesfuly")

            {orderId ? <p>Tu codigo de compra es: {orderId}
            {orderId}
            </p> : null}
            console.log("tu numero de orden ha sido renderizado" + orderId)

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

                <button type="submit">Submit</button>
                <ButtonComponent to="/cart" text="Go back"></ButtonComponent>
            </form>
        </div>
    );
                <button type="submit">Submit</button>
                <ButtonComponent to="/cart" text="Go back"></ButtonComponent>
            </form>
        </div>
    );
};

export default CheckoutComponent;
