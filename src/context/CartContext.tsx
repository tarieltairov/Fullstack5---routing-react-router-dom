import React, { createContext, useEffect, useState } from "react";
import type { Product } from "../types/product";

// Тип для продукта в корзине

interface CartItem extends Product {
  quantity: number;
}

// Тип для элементов конетекста
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeItemFromCart: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => {
        return item.id === product.id;
      });

      if (existing) {
        prev.map((item) => {
          return item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item;
        });
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItemFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseItem = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseItem = (id: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          return item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item;
        })
        .filter((item) => {
          return item.quantity > 0;
        });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        increaseItem,
        decreaseItem,
      }}
    >
        {children}
    </CartContext.Provider>
  );
}
