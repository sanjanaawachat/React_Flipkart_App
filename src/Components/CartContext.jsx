import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [item, setItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const clearCart = () => {
    setItem([]);
    setTotalItems(0);
    setTotalAmount(0);
  };

  return (
    <CartContext.Provider value={{ item, totalAmount, totalItems, setTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
