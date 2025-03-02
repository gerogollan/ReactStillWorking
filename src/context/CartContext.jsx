//Crear el contexto

import { createContext, useState } from "react";

export const CartContext= createContext();


//Crear el provider
export function CartProvider({children}){
    const [cart, setCart]= useState([]);

  //funcion de añadir productos
  const addProduct = (item) =>{
    setCart([...cart, item]);
  }

  //CREAR funcion de eliminar producto
  //filter o slice segun la documentacion de react


  
  //CREAR function de vaciar carrito


    return(
        <CartContext.Provider value={[cart, setCart , addProduct]}> 
        {children}
        </CartContext.Provider>
    )
}


