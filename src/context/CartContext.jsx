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

  // const addProduct = (item, quantity) => {
  //   setCart((prevCart) => {
  //     console.log("Carrito antes de agregar:", prevCart);
  
  //     // Buscar si el producto ya existe en el carrito
  //     const existingProduct = prevCart.find((prod) => prod.id === item.id);
  
  //     if (existingProduct) {
  //       // Si ya existe, actualizamos su cantidad
  //       const updatedCart = prevCart.map((prod) =>
  //         prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
  //       );
  //       console.log("Carrito después de agregar cantidad:", updatedCart);
  //       return updatedCart; // Devolvemos el carrito actualizado
  //     } else {
  //       // Si el producto no existe, lo agregamos
  //       const newCart = [...prevCart, { ...item, quantity }];
  //       console.log("Carrito después de agregar producto nuevo:", newCart);
  //       return newCart; // Devolvemos el carrito con el nuevo producto
  //     }
  //   });
  // };


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





 