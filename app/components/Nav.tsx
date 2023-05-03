"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-16">
      <h1 className="text-2xl">E-Commerce Site</h1>
      <ul className="flex items-center gap-12">
        {/*Check if user is not signed in */}
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
        {user && (
          <div>
            <li>
              <Image
                onClick={() => signOut()}
                className="rounded-full cursor-pointer"
                src={user?.image as string}
                alt={user.name as string}
                width={90}
                height={90}
              />
            </li>
          </div>
        )}
        <li></li>
      </ul>
    </nav>
  );
}
