import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const CartContext = createContext(null);

 // Crear el provider
export function CartProvider({ children }) {
 const [cart, setCart] = useState([]);
 



  // // Función para añadir productos al carrito
    const addProduct = (product) => {
      setCart([...cart, product]);
     };

  
  console.log(cart);

   // Verificar en consola cada vez que el carrito cambia
   useEffect(() => {
     console.log("Carrito actualizado:", cart.length);
   }, [cart]);

   return (
     <CartContext.Provider value={[cart, setCart, addProduct]}>
       {children}
     </CartContext.Provider>
   );
 }





 
