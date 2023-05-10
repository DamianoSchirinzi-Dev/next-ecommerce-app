"use client";

import Cart from "./Cart";
import { useCartStore } from "@/store";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { AiFillShopping } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();

  return (
    <nav className="flex justify-between items-center py-16">
      <Link href={"/"}>
        <h1 className="text-2xl">E-Commerce Site</h1>
      </Link>

      <ul className="flex items-center gap-8">
        {/*Toggle the cart*/}

        <li onClick={() => cartStore.toggleCart()} className="flex items-center text-3xl relative cursor-pointer">
          <AiFillShopping />
          <span className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
            {cartStore.cart.length}
          </span>
        </li>

        {/*if user is not signed in */}
        {!user && (
          <li>
            <button
              className="bg-teal-500 text-white text-xl py-2 px-4 rounded-md"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </li>
        )}
        {/*if user is signed in */}
        {user && (
          <div>
            <li>
              <Image
                onClick={() => signOut()}
                className="rounded-full cursor-pointer"
                src={user?.image as string}
                alt={user.name as string}
                width={48}
                height={48}
              />
            </li>
          </div>
        )}
        <li></li>
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
}
