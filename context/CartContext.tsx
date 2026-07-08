"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type TCartItems = {
  id: number;
  qty: number;
};

type TCartContext = {
  cartItems: TCartItems[];
  handleincproduct: (id: number) => void;
  handledecproduct: (id: number) => void;
  getproductqty: (id: number) => number;
  gettotalproductqty: number;
  removeProductFromCart: (id: number) => void;
};

const CartContext = createContext({} as TCartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setcartItems] = useState<TCartItems[]>([]);
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        setcartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      setcartItems([]);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const getproductqty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const gettotalproductqty = cartItems.reduce((totalqty, item) => {
    return totalqty + item.qty;
  }, 0);

  const handleincproduct = (id: number) => {
    setcartItems((currentItem) => {
      const existingItem = currentItem.find((item) => item.id === id);
      if (!existingItem) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };

  const handledecproduct = (id: number) => {
    setcartItems((currentItem) => {
      const existingItem = currentItem.find((item) => item.id === id);
      if (existingItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  const removeProductFromCart = (id: number) => {
    setcartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleincproduct,
        handledecproduct,
        getproductqty,
        gettotalproductqty,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
