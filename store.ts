import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddCartType } from "@/types/AddCartType";

type CartState = {
  cart: AddCartType[];
  isOpen: boolean;
  toggleCart: () => void;
  addProduct: (item: AddCartType) => void;
  removeProduct: (item: AddCartType) => void;
  paymentIntent: string;
  setPaymentIntent: (val: string) => void;
  onCheckout: string;
  setCheckout: (val: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      //Initialising Customers CartState
      cart: [],
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      paymentIntent:"",
      onCheckout: "cart",

      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),

        
      removeProduct: (item) =>
        set((state) => {
          //Check if item exists, remove one from quantity
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            //if quantity is less that 1, remove item from quantity
            const filteredCart = state.cart.filter(
              (cartItem) => cartItem.id != item.id
            );
            return { cart: filteredCart };
          }
        }),
        setPaymentIntent: (val) => set((state) => ({paymentIntent:val})),
        setCheckout: (val) => set((state) => ({onCheckout: val})),
    }),

    { name: "cart-store" }
  )
);
