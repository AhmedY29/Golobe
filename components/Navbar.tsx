"use client";
import React from "react";

// REACT ICON

import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function Navbar() {
  const { user, signOut, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };
  console.log(user, "sue");
  return (
    <nav className="navbar-container w-full flex justify-center items-center bg-white sticky top-0 z-50 ">
      <div className="navbar-content w-[85%] flex justify-between items-center">
        <div className="category-selection flex gap-3">
          <div className=" py-4 border-b-[#8DD3BB] border-b-4 gap-2 flex items-center">
            <IoAirplane />
            <span>Find Flight</span>
          </div>
          <div className=" py-4 hover:border-b-[#8DD3BB] border-b-4 border-transparent gap-2 flex items-center">
            <IoIosBed />
            <span>Find Stays</span>
          </div>
        </div>
        <div className="logo">
          <Link className="cursor-pointer" href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Golobe Logo"
              width={100}
              height={80}
            />
          </Link>
        </div>
        {!user ? (
          <div className="auth-btn gap-3 hidden md:flex">
            <Link href={"/signin"}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={"/signup"}>
              <Button>Sign up</Button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <h1>
              {user?.user_metadata?.firstName || user?.user_metadata?.full_name}
            </h1>
            <Image
              className="rounded-full"
              src={user?.user_metadata?.avatar_url}
              alt={
                user?.user_metadata?.firstName || user?.user_metadata?.full_name
              }
              width={40}
              height={40}
            />
            <button onClick={handleSignOut}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
