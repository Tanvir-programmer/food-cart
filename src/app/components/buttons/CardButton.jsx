"use client";
import React, { use, useState } from "react";
import { CartContext } from "@/context/CartProvider";

const CardButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);

  const { add2Cart } = use(CartContext);

  const handleAdd2Cart = () => {
    add2Cart(food);
    setInCart(true);
  };

  return (
    <div>
      <button
        onClick={handleAdd2Cart}
        disabled={inCart}
        className="px-5 rounded-xl bg-orange-500 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600 active:scale-95 disabled:bg-gray-300 disabled:text-gray-500"
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default CardButton;
