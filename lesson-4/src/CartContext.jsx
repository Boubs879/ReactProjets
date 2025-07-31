import React, { createContext, useState } from "react";

export const AddProduct = createContext();

function CartContext({ children }) {
  const [number, Setnumber] = useState(0);

  const Increment = () => {
    Setnumber(number + 1);
  };

  return (
    <AddProduct.Provider value={{ number, Increment }}>
      {children}
    </AddProduct.Provider>
  );
}

export default CartContext;
