"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import {motion} from "framer-motion";

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
       animate={{opacity: 1}}
       initial={{opacity: 0}}
        onClick={() =>
          cartStore.addProduct({ name, id, image, quantity, unit_amount })
        }
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700"
      >
        Add to cart
      </motion.button>
    </>
  );
}
