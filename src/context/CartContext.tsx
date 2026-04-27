/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Product } from '../types/product';

// Тип для продукта в корзине

interface CartItem extends Product {
  quantity: number;
}

// Тип для элементов конетекста
interface CartContextType {
  cart: CartItem[];

  totalPrice: number;
  totalCount: number;
  clearCart: () => void;
  getItemQuantity: (id: number) => number;

  addToCart: (product: Product) => void;
  removeItemFromCart: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const totalCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const clearCart = () => setCart([]);

  const getItemQuantity = (id: number) => {
    return cart.find((item) => item.id === id)?.quantity ?? 0;
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => {
        return item.id === product.id;
      });

      console.log('existing', existing);

      if (existing) {
        return prev.map((item) => {
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
        totalPrice,
        totalCount,
        clearCart,
        getItemQuantity,
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

export function useCart() {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error('useCart must be used within <CartProvider>');
  }

  return ctx;
}
