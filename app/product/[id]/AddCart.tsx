"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { motion } from "framer-motion";

export default function AddCart({
  name,
  id,
  image,
  quantity,
  unit_amount,
}: AddCartType) {
  const cartStore = useCartStore();
  return (
    <>
       <motion.button
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1 }}
        initial={{ scale: 0.9}} 
        onClick={() =>
          cartStore.addProduct({ name, id, image, quantity, unit_amount })
        }
        className="text-white text-sm py-2 px-6 mx-6 font-medium rounded-md bg-teal-700 md:my-8 md:text-lg"
      >
        Add to cart
      </motion.button>
      </>
  );
}
