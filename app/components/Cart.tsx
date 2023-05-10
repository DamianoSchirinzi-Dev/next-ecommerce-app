"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/util/priceFormat";

export default function Cart() {
  const cartStore = useCartStore();

  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700"
      >
        <h1>Heres your cart 📰</h1>
        {cartStore.cart.map((item) => (
          <div className="flex py-6 gap-4">
            <Image
              className="rounded-md object-cover"
              src={item.image}
              alt={item.name}
              width={180}
              height={180}
            />
            <div className="text-xl">
                <h2 className="font-bold">{item.name}</h2>
                <h2>Quantity: {item.quantity}</h2>
                <p>Price: {item.unit_amount && formatPrice(item.unit_amount) }</p>
            </div>
          </div>
        ))}

        <button className="py-2 mt-4 bg-teal-700 w-full text-white">Checkout</button>
      </div>
    </div>
  );
}
