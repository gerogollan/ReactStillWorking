import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext(null);

// Crear el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para añadir productos al carrito
  const addProduct = (item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, item];
      console.log("Nuevo carrito después de agregar:", newCart);
      return newCart;
    });
  };

  // Verificar en consola cada vez que el carrito cambia
  useEffect(() => {
    console.log("Carrito actualizado:", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart, addProduct]}>
      {children}
    </CartContext.Provider>
  );
}
