"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CardItems = () => {
  const { cart } = use(CartContext);
  return <div className="font-bold text-lg">{cart.length} Items added</div>;
};

export default CardItems;
