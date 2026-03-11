"use client";
import React, { useState, createContext } from "react";

// 1. Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 2. Cart state
  const [cart, setCart] = useState([]);

  // 3. Add item to cart
  const add2Cart = (item) => {
    setCart([item, ...cart]);
  };

  // 4. Value we want to share
  const cartInfo = {
    cart,
    add2Cart,
  };

  // 5. Provider
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
