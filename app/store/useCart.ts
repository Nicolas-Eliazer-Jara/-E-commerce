import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
  imageHover: string;
  description: string;
};

export type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            items: [...get().items, { ...item, quantity: 1 }],
          });
        }
      },
      removeFromCart: (id) => {
        set({
          items: get().items.filter((i) => i.id !== id),
        });
      },
      increaseQty: (id) => {
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        });
      },
      decreaseQty: (id) => {
        set({
          items: get().items
            .map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      total: () =>
        get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
      count: () =>
        get().items.reduce((acc, i) => acc + i.quantity, 0),
    }),
    {
      name: "cart-storage", // clave en localStorage
    }
  )
);
