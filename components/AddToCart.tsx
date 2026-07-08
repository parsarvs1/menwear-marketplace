"use client";
import { useCartContext } from "@/context/CartContext";
import React from "react";
interface Iaddtocart {
  id: string;
}
function AddToCart({ id }: Iaddtocart) {
  const { handleincproduct, handledecproduct, getproductqty } =
    useCartContext();
  return (
    <div className="pt-3 ml-2">
      <button
        onClick={() => handleincproduct(parseInt(id))}
        className="py-2 px-4 rounded bg-green-800 text-white cursor-pointer"
      >
        +
      </button>
      <span className="px-2">{getproductqty(parseInt(id))}</span>
      <button
        onClick={() => handledecproduct(parseInt(id))}
        className="py-2 px-4 rounded bg-red-600 text-white cursor-pointer"
      >
        -
      </button>
    </div>
  );
}
export default AddToCart;
