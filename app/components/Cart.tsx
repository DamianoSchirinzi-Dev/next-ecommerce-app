"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/util/priceFormat";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import basketPNG from "../../public/images/shopping-basket.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Cart() {
  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0, zIndex:100 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bottom-0 bg-black/25"
    >
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 bottom-0 w-full h-screen p-12 overflow-y-scroll text-gray-700 lg:w-2/5"
      >
        <div className="pb-2 flex flex-row justify-between">
          <h1 className="text-lg md:text-2xl font-semibold">
            Your Shopping Cart
          </h1>
          <button onClick={() => cartStore.toggleCart()}>
            <RxCross2 className="text-3xl  md:text-4xl"></RxCross2>
          </button>
        </div>

        {cartStore.cart.map((item) => (
          <motion.div layout key={item.id} className="flex py-6 mr-10 gap-4">
            <Image
              className="rounded-md object-cover w-28 md:w-1/3 lg:w-1/2"
              src={item.image}
              alt={item.name}
              width={180}
              height={180}
            />
            <div className="lg:text-xl">
              <h2 className="font-bold">{item.name}</h2>
              <div className="flex gap-2">
                <h2 className="pr-3 lg:text-lg">Quantity: {item.quantity}</h2>
                <button>
                  <IoRemoveCircle
                    onClick={() =>
                      cartStore.removeProduct({
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        unit_amount: item.unit_amount,
                        quantity: item.quantity,
                      })
                    }
                  />
                </button>
                <button
                  onClick={() =>
                    cartStore.addProduct({
                      id: item.id,
                      image: item.image,
                      name: item.name,
                      unit_amount: item.unit_amount,
                      quantity: item.quantity,
                    })
                  }
                >
                  <IoAddCircle />
                </button>
              </div>
              <p>Price: {item.unit_amount && formatPrice(item.unit_amount)}</p>
            </div>
          </motion.div>
        ))}

        {cartStore.cart.length > 0 && (
          <div>
            <h1 className="text-lg font-semibold">
              Total Price: {formatPrice(totalPrice)}
            </h1>

            <button className="py-2 mt-6 bg-teal-700 w-2/4 text-white lg:w-full">
              Checkout
            </button>
          </div>
        )}

        {!cartStore.cart.length && (
          <AnimatePresence>
            <motion.div
              animate={{ scale: 1, opacity: 0.75, rotateZ: 0 }}
              initial={{ scale: 0.4, opacity: 0, rotateZ: 350 }}
              exit={{ scale: 0.4, opacity: 0, rotateZ: 350 }}
              className="flex flex-col items-center gap-8 pt-36"
            >
              <h1 className="text-xl font-semibold">
                Oh no... Your cart is empty! 😥
              </h1>
              <Image
                src={basketPNG}
                width={200}
                height={200}
                alt="Empty Cart Icon"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </motion.div>
  );
}
