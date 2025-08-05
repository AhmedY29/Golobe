import React from "react";

// REACT ICON

import { IoAirplane } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
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
        <div className="auth-btn gap-3 hidden md:flex">
          <Link href={"/signin"}>
            <Button variant="outline">Login</Button>
          </Link>
          <Link href={"/signup"}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
